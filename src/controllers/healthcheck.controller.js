import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { asyncHandler } from "../utils/asyncHandler.js"

const healthcheck = asyncHandler(async (req, res) => {
    // INFORMATION: Healthcheck response that simply returns the OK status as json with a message

    return res
        .status(201)
        .json(new ApiResponse(200, {}, {}, "Everything is Ok"))

})

export {
    healthcheck
}
