import React from "react"
import ReactHtml from "react-html-parser"

import i18n from "../../helpers/i18n"
import { CASE_PATH } from "../../helpers/constants"
import S from "./style.module.scss"

export default function Article({ html, frontmatter, lang }) {
  const { titleEn, titleZh, clientEn, clientZh, date, url, gallery } = frontmatter

  const byLang = html.split("<!-- lang -->")

  const images = gallery.map(name => {
    return (
      <div className={S.image} key={name}>
        <img src={`${CASE_PATH}/${name}?x-oss-process=style/maf-works-detail`} />
      </div>
    )
  })

  return (
    <div className={S.article}>
      <div className={S.texts}>
        <h3>{lang === "zh" ? titleZh : titleEn}</h3>
        <h4>{lang === "zh" ? clientZh : clientEn}</h4>
        <h4>{new Date(date).getFullYear()}</h4>
        {url ? (
          <a href={url} target="_blank" className={S.viewProject}>
            {i18n.viewProject["en"]}
          </a>
        ) : null}
        <div className={S.content}>{ReactHtml(byLang[lang === "zh" ? 0 : 1])}</div>
        <div className={S.gallery}>{images}</div>
      </div>
    </div>
  )
}
