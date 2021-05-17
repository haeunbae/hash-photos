<template>
	<div class="modal" v-if="showModal">
		<div class="modal-card">
			<!-- modal header-->
			<div class="modal-header">
				<h3>update your hashtags</h3>
				<span @click="close"><font-awesome-icon icon="times" class="fas times fa-2x" /></span>
			</div>
			<!--modal content-->
			<div class="card-wrapper">
				<img :src="`http://localhost:3004/${image.img_path}`" @click="download(nowImg)" />

				<p class="info">Type your hashtag(ex. #HashTag")</p>
				<div class="wrapper">
					<input
						type="text"
						id="hashtags"
						autocomplete="off"
						v-model="image.img_tag"
						v-on:keyup.enter="submit"
					/>

					<!-- <div class="tag-container"></div> -->
				</div>
				<!-- <button class="save-btn" @click="save"><h3>save it!</h3></button> -->
				<div class="btns-area">
					<div class="btn-area" @click="saveUpdate">
						<font-awesome-icon icon="edit" style="height: 100%">수정</font-awesome-icon>
					</div>
					<div class="btn-area">
						<font-awesome-icon icon="trash-alt" style="height: 100%">삭제</font-awesome-icon>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	components: {},
	data() {
		return {
			images: [],
			hashtag: '',
			image: {
				img_path: '',
				img_tag: '',
			},
			imgInfo: {
				imgFile: null,
				hashtag: '',
			},
			uploadUser: '',
			showModal: false,
		};
	},
	watch: {
		hashtag() {
			this.submit();
		},
	},
	created() {},
	methods: {
		open(img) {
			this.showModal = true;
			this.image = img;
			// this.hashtag =
			console.log(img);
			console.log(this.showModal);
		},
		close() {
			this.showModal = false;
		},
		submit() {
			this.imgInfo.hashtag = this.hashtag
				.split(/(#[^\s#]+)/g)
				.filter(value => {
					if (value.match(/(#[^\s#]+)/)) {
						return value;
					}
				})
				.join('');

			console.log(this.imgInfo.hashtag);
		},
		save() {
			var formData = new FormData();

			formData.append('hashtag', this.imgInfo.hashtag);
			formData.append('img', this.imgInfo.imgFile, this.imgInfo.imgFile.name);
			this.$axios
				.post('/image', formData, {
					headers: {
						'Content-Type': 'multipart/form-data',
					},
				})
				.then(res => {
					console.log('axios post :::::');
					console.log(res);
					this.imgInfo = {};
					this.hashtag = '';
					if (res.status === 200) {
						alert('저장되었습니다.');
						this.close();
					}
				})
				.catch(function (error) {
					console.log(error);
				});
		},
		vfileAdded(file) {
			console.log(file);
			this.imgInfo.imgFile = file;
		},
		saveUpdate() {
			console.log(this.image);
		},
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
	z-index: 4;
}
.overlay {
	opacity: 0.5;
}
.modal-card {
	position: relative;
	max-width: 80%;
	z-index: 4;
	top: 20%;
	margin: auto;
	width: 50%;
	background-color: white;
	min-height: 500px;
	opacity: 1;
}
.modal-header {
	padding: 2px 16px;
	background-color: #5cb85c;
	color: white;
	display: flex;
	flex-direction: row;
	height: 50px;
	justify-content: space-between;
	align-items: center;
}

.close {
	margin-left: auto;
}

h3 {
	color: white;
}

img {
	display: inline;
	z-index: 4;
}

.card-wrapper {
	display: flex;
	flex-direction: column;
	z-index: 4;
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
	z-index: 4;
}

p {
	margin: 10px 10px;
	font-weight: 300;
	font-size: 14px;
	opacity: 0.8;
	letter-spacing: 1px;
	z-index: 4;
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
	z-index: 4;
}

.tag-container {
	display: flex;
	flex-flow: row wrap;
	z-index: 4;
}

.tag {
	pointer-events: none;
	background-color: #242424;
	color: white;
	padding: 6px;
	margin: 5px;
	z-index: 4;
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

.btns-area {
	display: flex;
}

.btn-area {
	width: 50%;
	min-height: 50px;
}
</style>
