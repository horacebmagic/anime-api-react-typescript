import React from 'react'

interface Props {
  data: string[] | number[] | undefined;
  setFilter: React.Dispatch<React.SetStateAction<any>>;
  val: string | number | undefined;
}

const SelectOption: React.FC<Props> = ({ data, setFilter, val }) => {
  return (
    <select 
      name="dayFilter" 
      className="text-xs text-gray-200 capitalize bg-gray-600 rounded-sm cursor-pointer py-1"
      onChange={(e: React.ChangeEvent<HTMLSelectElement>): void => { 
        e.preventDefault();
        setFilter(e.target.value); 
      }}
      value={ val }>
      {data?.map((value: string | number, index: number) => <option key={ index } value={ value }>{ value }</option>)}
    </select>
  )
}

export default SelectOption