import type { SiteConfig, SiteConfigInput, SiteConfigStack } from 'site-config-stack'

// Once we are accessing site config within Nuxt we have access to the url through request headers / window location
export type NuxtSiteConfig = Omit<SiteConfig, 'url'> & Required<Pick<SiteConfig, 'url'>>

export { SiteConfig, SiteConfigStack, SiteConfigInput }
