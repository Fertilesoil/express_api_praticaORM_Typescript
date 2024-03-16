import { Request, Response } from "express";
import { RoomRepository } from "../repositories/RoomRepository";

export class RoomController {
 async createRoom(req: Request, res: Response) {
  const { name, description } = req.body;

  try {
   const newRoom = RoomRepository.create({ name, description });
   await RoomRepository.save(newRoom);
   return res.status(201).json(newRoom);
  } catch (error) {
   console.log(error);
   return res.status(500).json({ msg: "Internal Server Error" });   
  }
 }
}