import getData from "./api.js";

async function dataIndex(parameters = "?") {
	try {
		getData(parameters).then(data => {
			data.map(elem => {
				const currentData = document.querySelector(".data");

				currentData.innerHTML += `
				<div class="card-wizard">
				<h3 class="title">${elem.title}</h3>
				<p class="description">${elem.description}</p>
				<p class="customerName"><strong>Заказчик:</strong> ${elem.customerName}</p>
				<p class="reward"><strong>Вознаграждение:</strong> ${elem.reward} золотых</p>
				<p class="status"><strong>Статус:</strong>
				<span class="status ${elem.status}">${elem.status}</span>
				</p>
				<p class="deadline"><strong>Срок выполнения:</strong> ${elem.deadline}</p>
				<p class="createdAt"><strong>Создано:</strong> ${elem.createdAt}</p>
				<div class="assignee">
				<p><strong>Исполнитель:</strong> ${elem.assignee.name}</p>
				<img src="${elem.assignee.avatar}" alt="Аватар ${elem.assignee.name}" width="50" height="50">
				</div>
				<hr>
				</div>
				`;
			});
		});
	} catch (error) {
		console.log(error);
	}
}

dataIndex();
