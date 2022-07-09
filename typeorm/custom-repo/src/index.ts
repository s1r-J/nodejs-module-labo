import { AppDataSource } from "./data-source"
import { UserController } from "./entity/controller/UserController"
import { User } from "./entity/User"

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    const user = new User()
    user.firstName = "Timber"
    user.lastName = "Saw"
    user.age = 25
    await AppDataSource.manager.save(user)
    console.log("Saved a new user with id: " + user.id)

    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(User)
    console.log("Loaded users: ", users)

    console.log("Here you can setup and run express / fastify / any other framework.")

    const userRepo = AppDataSource.getRepository(User);
    // const userRepo = AppDataSource..manager.getRepository(User); // 同じ
    const findUsers = () => {
        return userRepo.find()
    }
    console.log("repo", await findUsers())

    const userRepoExt = AppDataSource.getRepository(User).extend({ // AppDataSource..manager.getRepositoryでも同じ
        findByName(firstName: string, lastName: string) {
            return this.createQueryBuilder("user")
                .where("user.firstName = :firstName", { firstName })
                .andWhere("user.lastName = :lastName", { lastName })
                .getMany()
        },
    })
    console.log("repo ext", await userRepoExt.findByName("Timber", "Saw"))

    const controller = new UserController();
    console.log("controller", await controller.users())
    console.log("controller name", await controller.usersByNames("Timber", "Saw"))

}).catch(error => console.log(error))
