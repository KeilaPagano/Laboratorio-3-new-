import { useState } from 'react';



const Lista = () => {
    const [items, setItems] = useState([]); 
    const [inputValue, setInputValue] = useState(''); 
    const [checkedItems, setCheckedItems] = useState([]);

    const agregarTarea = () => {
        if (inputValue) { //si inputValue tiene un valor:
            setItems([...items, inputValue]); 
            setInputValue('');
        }
    };

    const borrarTarea = (index) => { 
        const newItems = items.filter((_, i) => i !== index);
        setItems(newItems);
        setCheckedItems(checkedItems.filter((_, i) => i !== index));
    };

    const handleCheckTarea = (index) => {
        setCheckedItems(prev => {
            const newCheckedItems = [...prev];
            newCheckedItems[index] = !newCheckedItems[index];
            return newCheckedItems;
        });
    };

    return (
        <div>
            <h3>Lista de tareas</h3>
            <input 
                type="text" 
                className="opacity-50" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
        
            <button type="button" className="btn btn-outline-primary, text-lg-end" onClick={agregarTarea}>Añadir tarea</button>
            

            <ul className="text-start">
                {items.map((item, index) => (
                    <li key={index}>
                        <input 
                            type="checkbox"
                            checked={!!checkedItems[index]}
                            onChange={() => handleCheckTarea(index)}/>
                            

                            <span style={{ textDecoration: checkedItems[index] ? 'line-through' : 'none' }}>
                                {item}
                            </span>
                        
                        <button onClick={() => borrarTarea(index)} className="btn btn-outline-secondary, text-lg-end">Borra tarea</button>
                        
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Lista;