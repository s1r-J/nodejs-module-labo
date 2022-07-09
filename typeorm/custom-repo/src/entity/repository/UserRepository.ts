import { AppDataSource } from "../../data-source"
import { User } from "../User"

// @EntiryRepository(User)は非推奨になっている。
// Repository内ではextendを使い、さらにControllerを使うのが推奨らしい

// export const UserRepository = AppDataSource.getRepository(User)
export const UserRepository = AppDataSource.getRepository(User).extend({
    findByName(firstName: string, lastName: string) {
        return this.createQueryBuilder("user")
            .where("user.firstName = :firstName", { firstName })
            .andWhere("user.lastName = :lastName", { lastName })
            .getMany()
    },
})
