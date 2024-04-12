// import { useState } from 'react'
import { useEffect, useState } from 'react'
import Select from 'react-tailwindcss-select'

const options = [
  { value: 'ONAT', label: 'ONAT' },
  { value: 'MININT', label: 'MININT' },
  { value: 'ETECSA', label: 'ETECSA' },
  { value: 'MTSS', label: 'MTSS' }
]

export default function CustomSelect({ selected, setSelected }) {
  const [test, setTest] = useState([])

  useEffect(() => {
    const result = options.filter((option, index) => {
      if (option.value == selected[index]?.name) {
        return option
      }
    })
    console.log('result', result)
    setTest(result)
  }, [selected])

  // const handleEditSelection = (array) => {
  //   return options.map((e, index) => e.value === array[index].name)
  // }

  const handleChange = (value) => {
    console.log('value:', value)
    setTest(value)
    // setSelected(value)
  }

  return (
    <Select
      value={test}
      onChange={handleChange}
      options={options}
      isMultiple={true}
      isClearable={true}
      isSearchable={true}
    />
  )
}
