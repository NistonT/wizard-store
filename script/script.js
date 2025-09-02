import { getData, patchData } from "./api.js";
import { cardWizard } from "./card.js";

async function dataIndex(parameters = "") {
	const currentData = document.querySelector(".data");

	try {
		const data = await getData(parameters);

		const cardsHTML = data
			.map(elem => {
				return cardWizard(elem);
			})
			.join("");

		currentData.innerHTML = cardsHTML;
	} catch (error) {
		console.log(error);
	}
}

dataIndex();

const form = document.getElementById("editForm");

form.addEventListener("submit", async e => {
	e.preventDefault();

	const formData = new FormData(form);
	const data = Object.fromEntries(formData);

	data.reward = Number(data.reward);

	const id = data.id;

	try {
		await patchData(id, data);

		form.closest(".modal").style.display = "none";

		dataIndex();
	} catch (error) {
		console.log(error);
	}
});

document.querySelector(".cancel").addEventListener("click", () => {
	form.closest(".modal").style.display = "none";
});

function openEditModal(order) {
	document.getElementById("orderId").value = order.id;
	document.querySelector('input[name="title"]').value = order.title;
	document.querySelector('input[name="description"]').value = order.description;
	document.querySelector('input[name="customerName"]').value =
		order.customerName;
	document.querySelector('input[name="reward"]').value = order.reward;
	document.querySelector('select[name="status"]').value = order.status;

	document.querySelector(".modal").style.display = "block";
}

document.addEventListener("click", e => {
	if (e.target.classList.contains("edit-button")) {
		const id = e.target.dataset.id;
		// Получи заказ по id и открой модальное окно
		getData().then(orders => {
			const order = orders.find(o => o.id == id);
			if (order) openEditModal(order);
		});
	}
});
