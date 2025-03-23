import './Favourites.css'
import React, { useState, useEffect } from 'react'



function Favourites() {
    const [records, setRecords] = useState([])
    const [coffeeDetails, setCoffeeDetails] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Get the authentication token from localStorage
        const token = localStorage.getItem('token');
        
        // Set up request headers with the token if it exists
        const headers = {
            'Content-Type': 'application/json'
        };
        
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }
        
        // Make the fetch request with headers
        fetch('https://buzz-my-day-app-xaqh.onrender.com/favourite', {
            method: 'GET',
            headers: headers
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            setRecords(data);
            // Fetch coffee details for each favourite
            fetchCoffeeDetails(data, headers);
        })
        .catch(err => console.log(err));
        
    }, []);

    const fetchCoffeeDetails = async (favourites, headers) => {
        try {
            const coffeeMap = {};
            
            // Create an array of promises for all fetch requests
            const fetchPromises = favourites.map(favourite => 
                fetch(`https://buzz-my-day-app-xaqh.onrender.com/coffee/${favourite.coffee_id}`, {
                    method: 'GET',
                    headers: headers
                })
                .then(response => {
                    if (!response.ok) throw new Error(`Failed to fetch coffee ${favourite.coffee_id}`);
                    return response.json();
                })
                .then(coffeeData => {
                    coffeeMap[favourite.coffee_id] = coffeeData;
                })
                .catch(err => console.log(err))
            );
            
            // Wait for all fetch requests to complete
            await Promise.all(fetchPromises);
            setCoffeeDetails(coffeeMap);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching coffee details:", error);
            setLoading(false);
        }
    };

    if (loading) {
        return <div className="loading">Loading your favourites...</div>;
    }

    return (
        <div className='card-wrapper'>
            {records.map((favourite, index) => {
                const coffee = coffeeDetails[favourite.coffee_id];
                
                if (!coffee) return null; // Skip if coffee details not found
                
                return (
                    <div className='card' key={index}>
                        <h3>{coffee.name}</h3>
                        <p>Brand: {coffee.brand}</p>
                        <p>Type: {coffee.type}</p>
                        <p>Description: {coffee.description}</p>
                        <p>Cost: ${coffee.cost}</p>
                        <p>Rating: {coffee.rating}/5</p>
                    </div>
                );
            })}
        </div>
    );
}


export default Favourites