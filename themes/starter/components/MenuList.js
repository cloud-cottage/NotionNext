import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import { useEffect } from 'react'
import { MenuItem } from './MenuItem'
/**
 * 响应式 折叠菜单
 */
export const MenuList = props => {
  const { customNav, customMenu } = props
  const { locale } = useGlobal()
  let links = [
    {
      icon: 'fas fa-book',
      name: 'Whitebook',
      href: 'https://docs.pixiu.us/',
      show: true
    },
    {
      icon: 'fas fa-award',
      name: 'Honors',
      href: '/honor',
      show: true
    },
    {
      icon: 'fas fa-pencil-ruler',
      name: 'Contributors',
      href: '/contributor',
      show: true
    },
    {
      icon: 'fas fa-file-code',
      name: 'Pixiu-APIs',
      href: '/api',
      show: true
    },
    {
      icon: 'fas fa-download',
      name: 'Downloads',
      href: '/download',
      show: true
    }
  ]

  if (customNav) {
    links = customNav.concat(links)
  }

  useEffect(() => {
    // ===== responsive navbar
    const navbarToggler = document.querySelector('#navbarToggler')
    const navbarCollapse = document.querySelector('#navbarCollapse')

    // 点击弹出菜单
    navbarToggler?.addEventListener('click', () => {
      navbarToggler?.classList.toggle('navbarTogglerActive')
      navbarCollapse?.classList.toggle('hidden')
    })

    //= ==== close navbar-collapse when a  clicked
    document
      .querySelectorAll('#navbarCollapse ul li:not(.submenu-item) a')
      .forEach(e =>
        e.addEventListener('click', () => {
          navbarToggler?.classList.remove('navbarTogglerActive')
          navbarCollapse?.classList.add('hidden')
        })
      )

    // ===== Sub-menu
    const submenuItems = document.querySelectorAll('.submenu-item')
    submenuItems.forEach(el => {
      el.querySelector('a')?.addEventListener('click', () => {
        el.querySelector('.submenu')?.classList.toggle('hidden')
      })
    })
  }, [])

  // 如果 开启自定义菜单，则覆盖Page生成的菜单
  if (siteConfig('CUSTOM_MENU')) {
    links = customMenu
  }

  //   if (!links || links.length === 0) {
  //     return null
  //   }

  return (
    <>
      <div>
        {/* 移动端菜单切换按钮 */}
        <button
          id='navbarToggler'
          className='absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden'>
          <span className='relative my-[6px] block h-[2px] w-[30px] bg-white duration-200 transition-all'></span>
          <span className='relative my-[6px] block h-[2px] w-[30px] bg-white duration-200 transition-all'></span>
          <span className='relative my-[6px] block h-[2px] w-[30px] bg-white duration-200 transition-all'></span>
        </button>

        {/* 响应式菜单 */}
        <nav
          id='navbarCollapse'
          className='absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:px-4 lg:py-0 lg:shadow-none dark:lg:bg-transparent xl:px-6'>
          <ul className='blcok lg:flex 2xl:ml-20'>
            {links?.map((link, index) => (
              <MenuItem key={index} link={link} />
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}
