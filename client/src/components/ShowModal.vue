<template>
	<div class="modal" v-if="showModal">
		<div class="overlay"></div>
		<span @click="close" class="close-btn"
			><font-awesome-icon icon="times" class="fas times fa-2x"
		/></span>
		<div class="modal-area">
			<span class="prev-section" @click="move(prevImg)" v-show="prevImg">
				<font-awesome-icon
					icon="chevron-left"
					class="fas fa-chevron-left prev-icon"
				></font-awesome-icon>
			</span>
			<span class="prev-section" v-show="!prevImg"></span>
			<div class="modal-card">
				<h3>{{ nowImg.img_tag }}</h3>
				<div class="card-wrapper">
					<!-- <span
            style="width: 100%; height: 100%; background-color: grey"
          ></span> -->
					<!-- <img src="http://localhost:3004/images/logo.png" /> -->
					<img :src="`http://localhost:3004/${nowImg.img_path}`" />
				</div>
			</div>
			<span class="next-section" @click="move(nextImg)" v-show="nextImg">
				<font-awesome-icon
					icon="chevron-right"
					class="fas fa-chevron-right next-icon"
				></font-awesome-icon>
			</span>
			<span class="next-section" v-show="!nextImg"></span>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		showModal: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			image: {},
			imgInfo: {
				imgFile: null,
				hashtag: '',
			},
			uploadUser: '',
			nowImg: null,
			prevImg: null,
			nextImg: null,
			images: [],
		};
	},
	watch: {
		hashtag() {
			this.submit();
		},
	},
	created() {},
	methods: {
		open(showImgs, img) {
			this.showModal = true;

			console.log(showImgs, img);
			this.images = showImgs;

			this.move(img);

			// this.nowImg = img;

			// const nowIdx = showImgs.findIndex((item) => item.img_id === img.img_id);

			// if (showImgs[nowIdx - 1]) {
			//   this.prevImg = showImgs[nowIdx - 1];
			// } else if (showImgs[nowIdx + 1]) {
			//   this.nextImg = showImgs[nowIdx + 1];
			// }

			// console.log(this.nowImg);
			// console.log(this.prevImg);
			// console.log(this.nextImg);
		},
		close() {
			this.showModal = false;

			this.nowImg = null;
			this.prevImg = null;
			this.nextImg = null;
		},
		move(img) {
			// this.images = showImgs

			this.nowImg = img;

			const nowIdx = this.images.findIndex(item => item.img_id === img.img_id);

			if (this.images[nowIdx - 1]) {
				this.prevImg = this.images[nowIdx - 1];
			}

			if (this.images[nowIdx + 1]) {
				this.nextImg = this.images[nowIdx + 1];
			}

			if (this.images.length === nowIdx + 1) {
				this.nextImg = null;
			}

			if (nowIdx === 0) {
				this.prevImg = null;
			}

			console.log('now', this.nowImg);
			console.log('prev', this.prevImg);
			console.log('next', this.nextImg);
		},
		save() {},
		// move(prevImg ){
		//   this.showImg(prevImg)
		// }
	},
};
</script>

<style scoped>
/* @import url("https://fonts.googleapis.com/css?family=Work+Sans:300,400"); */
/* Modal */
.modal,
.overlay {
	width: 100%;
	height: 100%;
	position: fixed;
	left: 0;
	top: 0;
	z-index: 3;
}
.overlay {
	opacity: 0.3;
	background-color: black;
}
.modal-card {
	position: relative;
	max-width: 80%;
	z-index: 10;
	top: 20%;
	margin: auto;
	width: 50%;
	background-color: white;
	min-height: 500px;
	opacity: 1;
}

.close {
	margin-left: auto;
}

img {
	display: inline;
	width: 100%;
	height: 100%;
	object-fit: contain;
	max-height: 400px;
}

.card-wrapper {
	margin: 0 auto;
	max-width: 90%;
	max-height: 90%;
	width: 480px;
	height: 400px;
}
.dropzone {
	min-height: 300px;
	background: white;
	/* padding: 20px 20px; */
	flex-grow: 2;
	height: 300px;
}

.dropzone .dz-preview {
	position: relative;
	display: inline-block;
	vertical-align: top;
	/* margin: 16px; */
	min-height: 100px;
}

.vue-dropzone > .dz-preview .dz-details {
	background-color: rgba(33, 150, 243, 0);
}

.dropzone .dz-preview.dz-image-preview {
	width: 100%;
	height: 100%;
}

.dropzone .dz-progress {
	display: none;
}

.wrapper {
	padding: 0;
	margin: 0;
	/* width: 580px; */
	background-color: darkseagreen;
	border-radius: 20px;
	display: flex;
	align-items: center;
	flex-flow: row wrap;
	border: solid 0px white;
}

h3 {
	color: #42b983;
	text-align: start;
	padding: 10px;
	/* margin-bottom: 0px; */
}

p {
	margin: 10px 10px;
	font-weight: 300;
	font-size: 14px;
	opacity: 0.8;
	letter-spacing: 1px;
}

input {
	border: none;
	border-radius: 12px;
	padding: 16px 20px;
	margin: 8px;
	width: 100%;
	color: #666;
	font-family: 'Work Sans', sans-serif;
	font-size: 16px;
	outline: none;
}

.tag-container {
	display: flex;
	flex-flow: row wrap;
}

.tag {
	pointer-events: none;
	background-color: #242424;
	color: white;
	padding: 6px;
	margin: 5px;
}

.tag::before {
	pointer-events: all;
	display: inline-block;
	content: 'x';
	height: 20px;
	width: 20px;
	margin-right: 6px;
	text-align: center;
	color: #ccc;
	background-color: #111;
	cursor: pointer;
}

.save-btn {
	background: lightgrey;
	border: none;
	margin-top: 10px;
}

.close-btn {
	position: fixed;
	right: 20px;
	top: 20px;
	color: white;
	z-index: 3;
}

.modal-area {
	display: flex;
	position: relative;
	top: 20%;
}

.prev-section {
	position: relative;
	max-width: 25%;
	z-index: 10;
	top: 50%;
	margin: auto;
	min-height: 500px;
	opacity: 1;
}

.next-section {
	position: relative;
	max-width: 25%;
	z-index: 10;
	top: 20%;
	margin: auto;
	min-height: 500px;
	opacity: 1;
}

.next-icon {
	width: 50px;
	height: 50px;
	position: fixed;
	top: 40%;
	right: 10%;
}

.prev-icon {
	width: 50px;
	height: 50px;
	position: fixed;
	top: 40%;
	left: 10%;
}
</style>
