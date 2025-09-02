import { deleteData } from "./api.js";

async function handlerDeleteData(id) {
	try {
		await deleteData(id);
		const currentData = document.querySelector(".data");
		currentData.innerHTML = "";
		dataIndex();
	} catch (error) {
		console.log(error);
	}
}

document.addEventListener("click", event => {
	if (event.target.classList.contains("button-delete")) {
		const id = event.target.dataset.id;
		handlerDeleteData(id);
	}
});
