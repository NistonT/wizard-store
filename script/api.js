const BASE_URL = "orders/";

export default async function getData(parameters = "?") {
	try {
		const response = await fetch(
			`http://localhost:3001/${BASE_URL}${parameters}`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			}
		);

		return await response.json();
	} catch (error) {
		console.log(error);
	}
}

export default async function deleteData(id) {
		try {
		const response = await fetch(
			`http://localhost:3001/${BASE_URL}${parameters}`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			}
		);

		return await response.json();
	} catch (error) {
		console.log(error);
	}
}