import { deleteData } from "./api.js";

// айди заказа
let currentDeleteId = null;

// Удаление заказа
async function handlerDeleteData(id) {
	if (!currentDeleteId) return;

	try {
		await deleteData(currentDeleteId);
		const currentData = document.querySelector(".data");
		currentData.innerHTML = "";
		dataIndex();
	} catch (error) {
		console.error("Ошибка при удалении:", error);
	} finally {
		currentDeleteId = null;
	}
}

// Открытие модального окна для удаление
document.addEventListener("click", event => {
	if (event.target.classList.contains("btn-delete")) {
		currentDeleteId = event.target.dataset.id;
		openDeleteModal();
	}
});

// Удаление заказа
document.addEventListener("click", event => {
	if (event.target.classList.contains("confirm")) {
		event.preventDefault();
		handlerDeleteData();
		closeDeleteModal();
	}
});

// Отмена удаление
document.addEventListener("click", () => {
	if (event.target.classList.contains("cancel")) {
		event.preventDefault();
		closeDeleteModal();
	}
});

// Открытие и закрытие модалки
function openDeleteModal() {
	document.querySelector(".modal-delete-overlay").classList.add("active");
}

function closeDeleteModal() {
	document.querySelector(".modal-delete-overlay").classList.remove("active");
}

document.querySelector(".cancel").addEventListener("click", closeDeleteModal);

document.querySelector(".modal-delete-overlay").addEventListener("click", e => {
	if (e.target === e.currentTarget) {
		closeDeleteModal();
	}
});
