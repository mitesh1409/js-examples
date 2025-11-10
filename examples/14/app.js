// Original user object of the user John Wick.
const johnWick = {
    firstName: 'John',
    lastName: 'Wick',
    email: 'john.wick@example.com',
    contactNumber: '1234567890',
    dob: '14-09-1985',
    gender: 'Male',
    account: {
        status: 'Active',
        visibility: 'Public',
        subscriptionPlan: 'Premium',
        lastLogin: '10-11-2025 1:30PM',
    },
    location: {
        address: '7089 Route 30',
        landmark: null,
        city: 'New York',
        pincode: 'NY 10040',
        country: 'United States'
    }
};

// Shallow Copy
const johnWickCopy = {...johnWick}

console.log('At the beginning...');
console.log('Original John Wick', johnWick);
console.log('Shallow Copy John Wick', johnWickCopy);

johnWickCopy.account.status = 'Inactive';

console.log('After updating Shallow Copy...');
console.log('Original John Wick', johnWick);
console.log('Shallow Copy John Wick', johnWickCopy);
