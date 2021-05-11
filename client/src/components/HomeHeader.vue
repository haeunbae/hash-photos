<template>
	<!-- <fixed-header> -->
	<div class="navbar">
		<div class="header-row">
			<h2>Hash Photos</h2>
			<input
				class="search"
				type="text"
				v-model="search"
				placeholder="검색"
				maxlength="75"
				@keyup.enter="searchImgs"
			/>
			<font-awesome-icon icon="user" class="fas fa-user" @click="logout"></font-awesome-icon>
			<!-- <button @click="open">upload Photo</button> -->
			<!-- <modal ref="modal"></modal> -->
		</div>
	</div>
	<!-- </fixed-header> -->
</template>

<script>
// import modal from "../components/AddModal";

export default {
	// components: {
	//   modal,
	// },
	data() {
		return {
			showModal: false,
			search: null,
		};
	},
	watch: {
		// search: {
		// 	handler() {
		// 		this.$emit('getSearchData', this.search);
		// 	},
		// },
	},
	methods: {
		open() {
			// this.showModal = !this.showModal;
			this.$refs.modal.open();
		},
		async logout() {
			await this.$axios
				.post('/logout')
				.then(res => {
					console.log(res.data);
					this.$store.commit('setNullUser');

					if (res.status === 200) {
						alert('로그아웃되었습니다.');
						this.$router.push('/login');
					} else {
						console.log(res);
					}
				})
				.catch(function (error) {
					console.log(error);
				});
		},
		searchImgs() {
			this.$emit('searchWithData', this.search);
		},
	},
};
</script>

<style>
.navbar {
	position: sticky;
	left: 0;
	top: 0;
	width: 100vw;
	background-color: white;
}

.header-row {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: start;
	padding: 0 20px;
	height: 54px;
	border-bottom: 1px solid lightgray;
}

.search {
	border: 0;
	margin: 0 20px;
	outline: 0;
	overflow: hidden;
	padding: 9px 0 7px 8px;
	text-overflow: ellipsis;
	background: rgba(var(--b3f, 250, 250, 250), 1);
	flex: 1 0 auto;
	width: 300px;
}
</style>
