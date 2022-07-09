import { UserRepository } from "../repository/UserRepository";

export class UserController {
    users() {
        return UserRepository.find()
    }

    usersByNames(firstName: string, lastName: string) {
        return UserRepository.findByName(firstName, lastName);
    }
}
