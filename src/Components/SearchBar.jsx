import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (event) => {
        setQuery(event.target.value);
        onSearch(event.target.value);
    };

    return (
        <input
            type="text"
            placeholder="Rechercher..."
            value={query}
            onChange={handleInputChange}
        />
    );
};

export default SearchBar;

/*const App = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const items = [
        'Accueil',
        'À propos',
        'Services',
        'Contact',
        'Blog',
        'Carrières'
    ];

    const filteredItems = items.filter(item =>
        item.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="App">
            <header className="App-header">
                <h1>Mon Site Web</h1>
                <SearchBar onSearch={setSearchQuery} />
                <ul>
                    {filteredItems.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </header>
        </div>
    );
};

export default App;*/
