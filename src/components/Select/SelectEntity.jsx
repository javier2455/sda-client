import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import CheckIcon from '../../icons/Checks'
import ArrowDownIcon from '../../icons/ArrowDown'
import Badge from '../Badge/Badge'
import { useEffect } from 'react'

const entities = [
  { name: 'ONAT' },
  { name: 'MTSS' },
  { name: 'ETECSA' },
  { name: 'MININT' }
]

export default function SelectEntity({ selected, setSelected }) {
  // const [selected, setSelected] = useState([])
  

  return (
    <div className=''>
      <Listbox value={selected} onChange={setSelected} multiple>
        <div className='relative mt-1'>
          <Listbox.Button
            id='entity'
            className='relative w-full cursor-pointer h-9 rounded-md bg-white py-2 pl-3 pr-10 text-left border-0 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm'
          >
            <div className='max-w-full truncate'>
              {selected &&
                selected.map((s) => (
                  <Badge key={s.name} text={s.name} />
                  // <span key={s.name} className='truncate'>{s.name} - </span>
                ))}
            </div>
            <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
              <ArrowDownIcon styles={'text-gray-400 size-5'} />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm'>
              {entities.map((entity, entityIdx) => (
                <Listbox.Option
                  key={entityIdx}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-blue-200 text-blue-900' : 'text-gray-900'
                    }`
                  }
                  value={entity}
                  // value={entities.find((e) => e.name === selected.name)}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {entity.name}
                      </span>
                      {selected ? (
                        <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-blue-500'>
                          <CheckIcon styles={'size-5'} />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}
