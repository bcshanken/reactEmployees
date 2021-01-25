import React, { Component } from 'react';

class Employees extends Component {

    state = {
        employees: [
            {
                "gender": "female",
                "name": {
                "title": "Ms",
                "first": "Kristina",
                "last": "Morrison"
                },
                "location": {
                "street": {
                "number": 3198,
                "name": "Hickory Creek Dr"
                },
                "city": "Moreno Valley",
                "state": "Iowa",
                "country": "United States",
                "postcode": 25443,
                "coordinates": {
                "latitude": "34.8767",
                "longitude": "127.4037"
                },
                "timezone": {
                "offset": "-9:00",
                "description": "Alaska"
                }
                },
                "email": "kristina.morrison@example.com",
                "login": {
                "uuid": "89c25594-28d3-4272-95b3-6a02ddc18c49",
                "username": "bluegorilla690",
                "password": "reality",
                "salt": "IZmlElew",
                "md5": "ceda2164ef7e943e8510e83679b8d482",
                "sha1": "7a96636c422e7fae5ba610df8a88f7a4274b1e26",
                "sha256": "d42c83054b4e904b388496d45f28165d5fb8f16249035fcc5cc9b04d41b1ce40"
                },
                "dob": {
                "date": "1947-07-19T08:41:24.763Z",
                "age": 74
                },
                "registered": {
                "date": "2005-06-29T02:52:36.254Z",
                "age": 16
                },
                "phone": "(870)-582-5631",
                "cell": "(828)-250-0975",
                "id": {
                "name": "SSN",
                "value": "120-49-7344"
                },
                "picture": {
                "large": "https://randomuser.me/api/portraits/women/82.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/82.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/82.jpg"
                },
                "nat": "US"
                }
        ],
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Employees;