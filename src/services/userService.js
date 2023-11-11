const baseUrl = "http://localhost:3030/jsonstore/users";

export const getAllUsers = async () => {
    const res = await fetch(baseUrl);
    const result = await res.json();
    const data = Object.values(result);

    return data;
};

export const create = async (data) => {
    const body = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phoneNumber: data.phoneNumber,
        imageUrl: data.imageUrl,
        createdAt: new Date().toISOString(),
        updateAt: new Date().toISOString(),
        address: {
            country: data.country,
            city: data.ciy,
            street: data.street,
            streetNumber: data.streetNumber,
        },
    };
    const res = await fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });

    const result = await res.json();
    console.log(result);
    return result;
};
