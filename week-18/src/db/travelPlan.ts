import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/*
 * Function should insert a new travel plan for this user
 * Should return a travel plan object
 * {
 *  title: string,
 *  destination_city: string,
 *  destination_country: string,
 *  start_date: string,
 *  end_date: string,
 *  budget: number,
 *  id: number
 * }
 */
export async function createTravelPlan(
  userId: number,
  title: string,
  destinationCity: string,
  destinationCountry: string,
  startDate: string,
  endDate: string,
  budget: number
) {
  const result = await prisma.travelPlan.create({
    data: {
      userId,
      title,
      destinationCity,
      destinationCountry,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      budget,
    },
  });
  console.log("Creating travel plan : ", result);
  return result;
}

/*
 * Function should update the budget or title for a specific travel plan
 * Should return the updated travel plan object
 */
export async function updateTravelPlan(
  planId: number,
  title?: string,
  budget?: number
) {
  const result = await prisma.travelPlan.update({
    where: {
      id: planId,
    },
    data: {
      ...(title && { title }), // Only update title if provided
      ...(budget !== undefined && { budget }), // Only update budget if provided
    },
  });
  console.log("Updating the travel plan : ", result);
}

/*
 * Function should get all the travel plans of a given user
 * Should return an array of travel plan objects
 * [{
 *  title: string,
 *  destination_city: string,
 *  destination_country: string,
 *  start_date: string,
 *  end_date: string,
 *  budget: number,
 *  id: number
 * }]
 */
export async function getTravelPlans(userId: number) {
  const result = await prisma.travelPlan.findMany({
    where: {
      userId,
    },
  });
  console.log("finding the travel plan with id : userId ", result);
  return result;
}
