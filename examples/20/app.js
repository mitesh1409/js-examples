// #1 Accessing nested properties.

const user = {
    name: "Alice",
    address: {
        street: "123 Main St",
        city: "Anytown"
    }
};

// Without optional chaining (might throw error if address or street is undefined)
// const street = user.address.street;

// With optional chaining
const street = user.address?.street; // "123 Main St"

console.log('street', street);

const company = {};
const companyName = company.details?.name; // undefined (no error)

console.log('companyName', companyName);


// #2 Calling methods

const api = {
    fetchData: () => "Data fetched!"
};

const result = api.fetchData?.(); // "Data fetched!"

console.log('result', result);

const otherApi = {};
const otherResult = otherApi.getData?.(); // undefined (no error)

console.log('otherResult', otherResult);


// #3 Accessing array elements.

const data = {
    items: ["apple", "banana"]
};

const firstItem = data.items?.[0]; // "apple"

console.log('firstItem', firstItem);

const emptyData = {};
const nonExistentItem = emptyData.items?.[0]; // undefined

console.log('nonExistentItem', nonExistentItem);
