const BASE_URL = "orders/";

export async function getData(parameters = "?") {
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

export async function deleteData(id) {
	try {
		const response = await fetch(`http://localhost:3001/${BASE_URL}${id}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
		});

		return await response.json();
	} catch (error) {
		console.log(error);
	}
}

export async function patchData(id, data) {
	try {
		const response = await fetch(`http://localhost:3001/${BASE_URL}${id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		return await response.json();
	} catch (error) {
		console.log(error);
	}
}
