import { getData, patchData } from "./api.js";
import { dataIndex } from "./script.js";

const form = document.getElementById("editForm");

form.addEventListener("submit", async event => {
	event.preventDefault();

	// Получение данных с формы
	const formData = new FormData(form);
	const data = Object.fromEntries(formData);

	data.reward = Number(data.reward);

	const id = data.id;

	try {
		await patchData(id, data);
		dataIndex();
	} catch (error) {
		console.log(error);
	}
});

// Перенос данных в форму
function patchDataForm(order) {
	document.getElementById("orderId").value = order.id;
	document.querySelector('input[name="title"]').value = order.title;
	document.querySelector('input[name="description"]').value = order.description;
	document.querySelector('input[name="customerName"]').value =
		order.customerName;
	document.querySelector('input[name="reward"]').value = order.reward;
	document.querySelector('select[name="status"]').value = order.status;
}

// Перенос данных на форму
document.addEventListener("click", e => {
	if (e.target.classList.contains("btn-edit")) {
		openModal();
		const id = e.target.dataset.id;
		getData().then(orders => {
			const order = orders.find(o => o.id === id);
			if (order) patchDataForm(order);
		});
	}
});

// Открыть модалку
function openModal() {
	document.querySelector(".modal-overlay").classList.add("active");
}

// Закрыть модалку
function closeModal() {
	document.querySelector(".modal-overlay").classList.remove("active");
}

// Закрытие по кнопке отмена
document.querySelector(".cancel").addEventListener("click", closeModal);

// Закрытие по клику на фон
document.querySelector(".modal-overlay").addEventListener("click", e => {
	if (e.target === e.currentTarget) closeModal();
});
