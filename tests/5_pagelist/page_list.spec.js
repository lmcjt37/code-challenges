import getPagesList from './page_list'
import sitemap from './sitemap'

it('should match flat list of pages', () => {
  expect(getPagesList(sitemap)).toEqual([
    'Home',
    'About',
    'Services',
    'Marketing',
    'Design',
    'Corporate identity',
    'Web design',
    'Special offer',
    'Print design',
    'PR',
    'Contact us',
    'Ask for a quote',
    'T&C',
  ])
})
