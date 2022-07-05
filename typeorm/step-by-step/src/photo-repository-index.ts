import { Photo } from "./entity/Photo"
import { AppDataSource } from "./photo-data-source"

;(async () => {
    const photo = new Photo()
    photo.name = "Me and Bears"
    photo.description = "I am near polar bears"
    photo.filename = "photo-with-bears.jpg"
    photo.views = 1
    photo.isPublished = true
    
    await AppDataSource.initialize()
    const PhotoRepository = AppDataSource.getRepository(Photo)

    await PhotoRepository.save(photo)
    console.log("Photo has been saved")

    const savedPhotos = await PhotoRepository.find()
    console.log("All photos from the db: ", savedPhotos)

    // Loading from the database
    const firstPhoto = await PhotoRepository.findOneBy({
        id: 1,
    })
    console.log("First photo from the db: ", firstPhoto)
    
    const meAndBearsPhoto = await PhotoRepository.findOneBy({
        name: "Me and Bears",
    })
    console.log("Me and Bears photo from the db: ", meAndBearsPhoto)

    const allViewedPhotos = await PhotoRepository.findBy({ views: 1 })
    console.log("All viewed photos: ", allViewedPhotos)

    const allPublishedPhotos = await PhotoRepository.findBy({ isPublished: true })
    console.log("All published photos: ", allPublishedPhotos)

    const [photos, photosCount] = await PhotoRepository.findAndCount()
    console.log("All photos: ", photos)
    console.log("Photos count: ", photosCount)

    // Update
    const photoToUpdate = await PhotoRepository.findOneBy({
        id: photosCount - 1,
    })
    photoToUpdate.name = "Me, my friends and polar bears"    
    await PhotoRepository.save(photoToUpdate)

    // remove
    const photoToRemove = await PhotoRepository.findOneBy({
        id: photosCount - 1,
    })
    await PhotoRepository.remove(photoToRemove)
    console.log(photoToRemove)
})()

