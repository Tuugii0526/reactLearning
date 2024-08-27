import {useState} from 'react'
export const FilterableProductTable=()=>{
    const [filterText,setFilterText]=useState('')
    const [inStockOnly,setInStockOnly]=useState(false)
    const PRODUCTS = [
        {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
        {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
        {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
        {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
        {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
        {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
      ];
    const ProductCategoryRow=({category})=>{
       return <tr>
            <th>{category}</th>
        </tr>
    }
    const ProductRow=({product})=>{
        const name=product.stocked ? product.name : <span style={{color:'red'}}>{product.name}</span>
        return <tr>
            <td>{name}</td>
            <td>{product.price}</td>
        </tr>
    }
    const ProductTable=({products,filterText,inStockOnly})=>{
        const rows=[];
        let lastCategory=null;
   products.forEach(product => {
       if(product.name.toLowerCase().indexOf(filterText.toLowerCase())===-1)
       {
        return 
       }
       if(inStockOnly && !product.stocked)
       {
        return 
       }
       if(product.category!==lastCategory)
       {
        rows.push(<ProductCategoryRow category={product.category} key={product.category}/>)
       }
       rows.push(<ProductRow product={product} key={product.name}/>)
       lastCategory=product.category

   });
   return (<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Price</th>
        </tr>
    </thead>
    <tbody>
    {rows}
    </tbody>
   </table>)
    }
    const SearchBar=({filterText,inStockOnly,setFilterText,setInStockOnly})=>{
        return(<>
        <input type="text" placeholder='  Search...' className='border-[2px]' value={filterText} onChange={(e)=>setFilterText(e.target.value)}/>
        <label htmlFor="stockCheck" className='flex gap-2' >
            <input id='stockCheck' type="checkbox" checked={inStockOnly} onChange={(e)=>setInStockOnly(e.target.checked)}/>
             Only show products in stock
        </label>
        </>)
    }
    return (
    <div className='w-full h-screen '>
        <div className='w-[300px] h-[400px] p-4 m-auto grid grid-rows-[repeat(2,80px)] justify-items-center  border-[3px] border-slate-400 '>
    <SearchBar filterText={filterText} inStockOnly={inStockOnly} setFilterText={setFilterText} setInStockOnly={setInStockOnly}/>
    <ProductTable products={PRODUCTS} filterText={filterText} inStockOnly={inStockOnly}/>

        </div>
    </div>
    )
}