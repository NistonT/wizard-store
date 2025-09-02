function formatDate(dateString) {
	const options = { year: "numeric", month: "long", day: "numeric" };
	return new Date(dateString).toLocaleDateString("ru-RU", options);
}

// Дизайн карточек
export const cardWizard = elem => {
	return `
				<div class="card-wizard" data-id="${elem.id}">
					<h3 class="title">${elem.title}</h3>
					<p class="description">${elem.description}</p>

					<div class="info-grid">
						<p class="customer">
							<span>Заказчик:</span> ${elem.customerName}
						</p>
						<p class="reward">
							<span>Вознаграждение:</span> ${elem.reward} золотых
						</p>
						<p class="deadline">
							<span>Срок:</span> ${formatDate(elem.deadline)}
						</p>
						<p class="created">
							<span>Создано:</span> ${formatDate(elem.createdAt)}
						</p>
						<p class="status">
							<span>Статус:</span>
							<span class="status-pill ${elem.status.toLowerCase()}"
								>${elem.status}</span
							>
						</p>
					</div>

					<div class="assignee">
						<div class="assignee-info">
							<span>Исполнитель:</span> ${elem.assignee.name}
						</div>
						<img
							src="${elem.assignee.avatar.trim()}"
							alt="Аватар ${elem.assignee.name}"
							width="50"
							height="50"
							class="avatar"
						/>
					</div>

					<div class="actions">
						<button class="btn btn-delete" data-id="${elem.id}">Удалить</button>
						<button class="btn btn-edit" data-id="${elem.id}">
							Редактировать
						</button>
					</div>
				</div>`;
};
