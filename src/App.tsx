import ListGroup from './components/ListGroup';

function App() {


    let items: string[] = [
        'New York',
        'San Fransicco',
        'Toyko',
        'London',
        'Paris'
    ];

    const handleSelectItem = (item: string): void => {
        console.log("I did it: " + item);
    };

    return <div><ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/></div>;
}

export default App;