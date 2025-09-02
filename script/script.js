import { getData } from "./api.js";
import { cardWizard } from "./card.js";

// Вывод карточек

export async function dataIndex(parameters = "") {
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
