import {Project} from "../../types";
import Image from "next/image";
import MarkdownIt from "markdown-it";
import styles from "./styles.module.scss";

export default function Page({
                               params: {project},
                             }: {
  params: { project: string };
}) {
  let md = new MarkdownIt();
  let projectData: Project = require(`/content/projects/${project}/content.yaml`)

  let isPhoto = (val: string) => !val.endsWith(".mp4")
  let imgPosition = (i: number) => i % 2 === 0 ? 'row' : 'row-reverse'
  let remainingWidth = (w: number) => 100 - w
  let contentName = (name: string) => `/content/projects/${project}/${name}`

  return (
    <div className="flex flex-col w-[80%] my-0 mx-auto gap-4 my-8">
      {projectData.content.map((ele, i) =>
        <div key={i} className="shadow-tile">
          {isPhoto(ele.image.name) ?
            <div className={styles.contentTileImage} style={{height: ele.tileHeight, flexDirection: imgPosition(i)}}>
              <div className={styles.contentImage}
                   style={{width: `${ele.image.width}%`, backgroundColor: ele.backgroundColor}}>
                <Image
                		className={`object-${ele.image.fitting} z-0`}
                		src={contentName(ele.image.name)}
                		alt={ele.description}
                		fill
                		priority={i==0}
                		quality={100}
                		sizes="80vw"
                		style={{
                			objectPosition: ele.image.fitting === "cover" ? `${ele.image.positionHorizontal}% ${ele.image.positionVertical}%` : "50% 50%"
                		}}/>
                {/*<img src={contentName(ele.image.name)}*/}
                {/*     className={`object-${ele.image.fitting} z-0 absolute h-full w-full`}*/}
                {/*     style={{*/}
                {/*       objectPosition: ele.image.fitting === "cover" ? `${ele.image.positionHorizontal}% ${ele.image.positionVertical}%` : "50% 50%"*/}
                {/*     }}/>*/}
              </div>
              <div className={styles.contentTextContainer} style={{width: `${remainingWidth(ele.image.width)}%`}}>
                {ele.description &&
                  <div className={styles.contentText} dangerouslySetInnerHTML={{__html: md.render(ele.description)}}/>
                }
              </div>
            </div>
            :
            <div className={styles.contentTile}>
              <div className="w-full h-full">
                <video loop autoPlay muted className="video max-w-full" src={contentName(ele.image.name)}/>
              </div>
              <div className={styles.contentTextContainer}>
                {ele.description &&
                  <div className={styles.contentText} dangerouslySetInnerHTML={{__html: md.render(ele.description)}}/>
                }
              </div>
            </div>
          }
        </div>
      )}
      {projectData.listing?.images.map((img, i) =>
        <div className="relative w-full" key={i}>
          <Image
            className="shadow-tile w-full"
            src={contentName(img)}
            alt=""
            quality={100}
            width={projectData.listing?.imageSizeX}
            height={projectData.listing?.imageSizeY}/>
        </div>
      )}
    </div>
  )
}