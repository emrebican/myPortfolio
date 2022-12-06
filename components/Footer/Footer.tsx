import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="mb-6 mt-10">
      <Link
        href="https://github.com/emrebican"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex justify-center items-center gap-4">
          <p className="text-sm text-gray-600">made by</p>
          <Image
            src="/assets/skills/github.png"
            alt="logo"
            width={24}
            height={24}
          />
          <p className="text-sm text-gray-600">emrebican</p>
        </div>
      </Link>
    </footer>
  )
}

export default Footer
