const Instruction = () => {
  return (
    <aside>
      <h2 className='font-["Bebas_Neue"] text-2xl md:text-4xl font-extrabold tracking-widest mb-8'>
        Instructions
      </h2>
      <ol className='text-md md:text-xl uppercase text-white list-decimal list-inside marker:text-blue-200'>
        <li>Ensure room is dark</li>
        <li>Increase device brightness</li>
      </ol>
    </aside>
  );
};

export default Instruction;
