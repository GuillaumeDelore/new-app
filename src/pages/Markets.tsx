import { Box } from '@chakra-ui/react'
import { Title } from '#components/Title'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Markets() {

  return (
    <>
      <div className="flex justify-around">
        <Box
          h="130px"
          color="white"
          w="49%"
          className="flex rounded-3xl bg-pink-200 p-4 flex-col justify-between py-6"
        >
          <p className="text-neutral-700">Deposit Market Size</p>
          <span className="text-4xl font-bold text-pink-700">$ 25,750,426.95</span>
        </Box>
        <Box
          h="130px"
          color="white"
          w="49%"
          className="flex rounded-3xl bg-violet-100 p-4 flex-col justify-between py-6"
        >
          <p className="text-neutral-700">Borrow Market Size</p>
          <span className="text-4xl font-bold text-purple-800">$ 25,750,426.95</span>
        </Box>
      </div>
      <div className="mt-5">
        <div className="py-2 flex justify-between">
          <Title title="Markets" />
          <div className="w-[240px] h-[38px] relative">
            <input className="w-full h-[38px] text-sm font-medium rounded-[10px] outline outline-2	hover:outline-pink-500 outline-gray-300 px-[30px]" />
            <span className="absolute top-1/2 left-2 -translate-y-1/2">
              <FontAwesomeIcon icon={faSearch} />
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
