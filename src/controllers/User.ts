import { Request, Response } from "express";
import { UserRepository } from "../repositories/User";
import { IUserRequest } from "../interfaces/User";

const userRepository = new UserRepository();



export const verifyUser = async (req: Request, res: Response): Promise<void> =>{
    try {
        const userId = req.params.userId;
        if(!userId){
            res.status(400).json({message: 'El id del usuario es obligatorio'});
            return;
        }
        
        const verify = await userRepository.verifyExistUser(userId);
        
        res.status(200).json(verify);
    } catch (error) {
        res.status(500).json({message: 'Error interno del servidor'});
    }
}
