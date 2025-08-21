import { useTranslation } from 'react-i18next'

export const T = ({ i18nKey, defaultText, values, components }) => {
  const { t } = useTranslation()
  return t(i18nKey, { defaultValue: defaultText, ...values, components })
}
