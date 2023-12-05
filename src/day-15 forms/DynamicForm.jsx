function DynamicForm() {
    const [inputs, setInputs] = useState([{ value: '' }]);
  
    const handleAddInput = () => {
      setInputs([...inputs, { value: '' }]);
    };
  
    const handleChangeInput = (index, event) => {
      const newInputs = inputs.map((input, i) => {
        if (i === index) {
          return { ...input, value: event.target.value };
        }
        return input;
      });
  
      setInputs(newInputs);
    };
  
    return (
      <div>
        {inputs.map((input, index) => (
          <input
            key={index}
            value={input.value}
            onChange={(event) => handleChangeInput(index, event)}
          />
        ))}
        <button onClick={handleAddInput}>Add Input</button>
      </div>
    );
  }
  