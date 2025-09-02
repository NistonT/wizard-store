function formatDate(dateString) {
	const options = { year: "numeric", month: "long", day: "numeric" };
	return new Date(dateString).toLocaleDateString("ru-RU", options);
}

export const cardWizard = elem => {
	return `
	<div class="card-wizard" data-id="${elem.id}">
	<h3 class="title">${elem.title}</h3>
	<p class="description">${elem.description}</p>
	<p class="customerName"><strong>Заказчик:</strong> ${elem.customerName}</p>
	<p class="reward"><strong>Вознаграждение:</strong> ${elem.reward} золотых</p>
	<p class="status"><strong>Статус:</strong>
		<span class="status ${elem.status.toLowerCase()}">${elem.status}</span>
	</p>
	<p class="deadline"><strong>Срок выполнения:</strong> ${formatDate(
		elem.deadline
	)}</p>
	<p class="createdAt"><strong>Создано:</strong> ${formatDate(elem.createdAt)}</p>
	<div class="assignee">
	<p><strong>Исполнитель:</strong> ${elem.assignee?.name}</p>
	<img src="${elem.assignee.avatar.trim()}" 
						alt="Аватар ${elem.assignee.name}" 
						width="50" height="50">
	</div>
	<button class="button-delete" data-id="${elem.id}">Удалить</button>
	<button class="edit-button" data-id="${elem.id}">Редактировать</button>
	<hr>
</div>`;
};
