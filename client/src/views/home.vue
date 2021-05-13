<template>
	<div>
		<Header @getSearchData="getSearchData" @searchWithData="searchWithData" />
		<div class="main">
			<div class="image-container">
				<div class="img-row" v-for="(rowImgs, i) in images" :key="i">
					<div class="img-box" v-for="img in rowImgs" :key="img.img_id" @click="show(img)">
						<!-- <img src="http://localhost:3004/images/logo.png" /> -->
						<img :src="`http://localhost:3004/${img.img_path}`" />
						<div class="hashtag">
							<h3>{{ img.img_tag }}</h3>
						</div>
					</div>
				</div>
				<div id="bottomSensor"></div>
			</div>

			<span @click="open" class="plus-btn"
				><font-awesome-icon icon="plus" class="fas plus fa-2x"
			/></span>

			<addModal ref="addModal"></addModal>
			<showModal ref="showModal"></showModal>
		</div>
	</div>
</template>

<script>
import header from '../components/HomeHeader';
import addModal from '../components/AddModal';
import showModal from '../components/ShowModal.vue';
// import { ScrollContainer, ScrollItem } from 'vue-scrollmonitor';

export default {
	components: {
		addModal,
		showModal,
		Header: header,
		// ScrollContainer,
		// ScrollItem,
	},
	data() {
		return {
			showModal: false,
			images: [],
			selectImg: [],
			search: null,
			searchCount: 1,
			bottomSensor: null,
			watcher: null,
		};
	},
	created() {
		this.fetch();
	},
	mounted() {
		//DOM에 Vue인스턴스가 부착된 뒤 실행
		this.bottomSensor = document.querySelector('#bottomSensor');
		this.watcher = scrollMonitor.create(bottomSensor);

		this.addScrollWatcher();
	},
	updated() {},
	methods: {
		open() {
			this.$refs.addModal.open();
		},
		fetch(search) {
			let params = {
				search: search,
				count: this.searchCount,
			};

			this.$axios
				.get('/image/list', {
					params: params,
				})
				.then(res => {
					this.images = res.data.formatImgs;
					this.selectImg = res.data.getImgs;
				})
				.catch(err => {
					console.log(err);
				});
		},
		show(img) {
			this.$refs.showModal.open(this.selectImg, img);
		},
		getSearchData(data) {
			this.search = data;
		},
		searchWithData(search) {
			this.fetch(search);
		},
		addScrollWatcher() {
			this.watcher.enterViewport(() => {
				this.searchCount += 1;
				console.log('update count :::', this.searchCount);
				// 서버 과부하를 막기 위한 안전장치 0.5초
				// setTimeout(() => {
				this.fetch();
				// }, 500);
			});
		},
	},
};
</script>

<style>
.main {
	text-align: center;
	margin: 0 auto;
	background-color: rgba(var(--b3f, 250, 250, 250), 1);
}
.image-container {
	margin: auto;
	padding: 20px;
	background-color: rgba(var(--b3f, 250, 250, 250), 1);
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-content: flex-start;
	height: 1100px;
	overflow-y: scroll;
}
.img-row {
	width: 100%;
	max-height: 400px;
	display: flex;
}

.img-box {
	width: 33%;
	background-color: rgba(0, 0, 0, 0);
	padding: 0;
	margin: 0 auto;
	padding-bottom: 30%;
	position: relative;
	max-width: 300px;
	max-height: 300px;
	position: relative;
}
img {
	display: inline;
	width: 100%;
	height: 100%;
	object-fit: contain;
	position: absolute;

	left: 0;
	z-index: 2;
	background-color: white;
}

.img-box:hover img {
	opacity: 0.5;
	z-index: 1;
}

.hashtag {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
	display: block;
	display: flex;
	align-items: center;
}
.hashtag > h3 {
	width: 80%;
	color: black;
	text-align: center;
	margin: auto;
}

.plus-btn {
	position: fixed;
	right: 5%;
	bottom: 5%;
	cursor: pointer;
}

#bottomSensor {
	background-color: burlywood;
	width: 100%;
	height: 10px;
}
</style>
