

export default async function IndividualWorkout({
    searchParams,
  }: {
    searchParams: { [key: string]: string | string[] | undefined };
  }) {
    const id = searchParams['ref'] as string;
  console.log(id);
      return (
        <>
         <span>{id}</span>
        </>
      );
    
  return <span>Loading...</span>; // Or any other loading indicator
}
