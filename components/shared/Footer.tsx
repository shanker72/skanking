import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const footer = () => {
  return (
    <footer className="border-t">
      <div className='flex-center wrapper flex-between flrx flex-col gap-4 p-5 textg-center sm:flex-row'>
        <Link href='/'>
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={128}
            height={38}
          />        
        </Link>

        <p>2024 Skankers Inc. All Rights Reserved.</p>
      </div>

    </footer>
  )
}

export default footer
