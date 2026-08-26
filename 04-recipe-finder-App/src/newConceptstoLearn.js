// We are going to learn componentrs
/**
 * Wee cannot always work inside of App.jsx when we are working with larger prjects
 * For smaller projects it is okay to do this
 *
 * 99% of the times a component will be defined as a function
 * Best practise -> function based component
 *
 */

/**
 * export default function CardList() {
   return (
     <section className="cards">
    //    { <Card /> }
       {recipes.map((recipe) => (
         <Card />
       ))}
     </section>
   );
 }
 * Commmunicate the data from the parent component to the child component :: 
 * How ? 
 * We utilize something known as props
 * define a prob inside of a child 
 * Extract that prop inside of the parent 
 * we extract the propsusing the parameters and define as many props asx we wat
 * for this case : pass the entire thing as a prop, all of the iterations of each recipe of recipes array of objects 
 * destructure it in the parent  
 */

/**
 * t.b.c : 4:32
 */
