

export default function Home() {
  const sum = (a: number, b:number) =>{
    return(a + b);
  }
  return (
    <>
      <h1>Sum</h1>
      <p>{sum(1, 2)}</p>
    </>
  );
}

