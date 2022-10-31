/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/modulesMappers";
import * as Parameters from "../models/parameters";
import { IotHubGatewayServiceAPIsContext } from "../iotHubGatewayServiceAPIsContext";

/** Class representing a Modules. */
export class Modules {
  private readonly client: IotHubGatewayServiceAPIsContext;

  /**
   * Create a Modules.
   * @param {IotHubGatewayServiceAPIsContext} client Reference to the service client.
   */
  constructor(client: IotHubGatewayServiceAPIsContext) {
    this.client = client;
  }

  /**
   * Gets the module twin. See https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-device-twins
   * for more information.
   * @param id The unique identifier of the device.
   * @param mid The unique identifier of the module.
   * @param [options] The optional parameters
   * @returns Promise<Models.ModulesGetTwinResponse>
   */
  getTwin(id: string, mid: string, options?: msRest.RequestOptionsBase): Promise<Models.ModulesGetTwinResponse>;
  /**
   * @param id The unique identifier of the device.
   * @param mid The unique identifier of the module.
   * @param callback The callback
   */
  getTwin(id: string, mid: string, callback: msRest.ServiceCallback<Models.Twin>): void;
  /**
   * @param id The unique identifier of the device.
   * @param mid The unique identifier of the module.
   * @param options The optional parameters
   * @param callback The callback
   */
  getTwin(id: string, mid: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Twin>): void;
  getTwin(id: string, mid: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Twin>, callback?: msRest.ServiceCallback<Models.Twin>): Promise<Models.ModulesGetTwinResponse> {
    return this.client.sendOperationRequest(
      {
        id,
        mid,
        options
      },
      getTwinOperationSpec,
      callback) as Promise<Models.ModulesGetTwinResponse>;
  }

  /**
   * Replaces the tags and desired properties of a module twin. See
   * https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-device-twins for more information.
   * @param id The unique identifier of the device.
   * @param mid The unique identifier of the module.
   * @param deviceTwinInfo The module twin info that will replace the existing info.
   * @param [options] The optional parameters
   * @returns Promise<Models.ModulesReplaceTwinResponse>
   */
  replaceTwin(id: string, mid: string, deviceTwinInfo: Models.Twin, options?: Models.ModulesReplaceTwinOptionalParams): Promise<Models.ModulesReplaceTwinResponse>;
  /**
   * @param id The unique identifier of the device.
   * @param mid The unique identifier of the module.
   * @param deviceTwinInfo The module twin info that will replace the existing info.
   * @param callback The callback
   */
  replaceTwin(id: string, mid: string, deviceTwinInfo: Models.Twin, callback: msRest.ServiceCallback<Models.Twin>): void;
  /**
   * @param id The unique identifier of the device.
   * @param mid The unique identifier of the module.
   * @param deviceTwinInfo The module twin info that will replace the existing info.
   * @param options The optional parameters
   * @param callback The callback
   */
  replaceTwin(id: string, mid: string, deviceTwinInfo: Models.Twin, options: Models.ModulesReplaceTwinOptionalParams, callback: msRest.ServiceCallback<Models.Twin>): void;
  replaceTwin(id: string, mid: string, deviceTwinInfo: Models.Twin, options?: Models.ModulesReplaceTwinOptionalParams | msRest.ServiceCallback<Models.Twin>, callback?: msRest.ServiceCallback<Models.Twin>): Promise<Models.ModulesReplaceTwinResponse> {
    return this.client.sendOperationRequest(
      {
        id,
        mid,
        deviceTwinInfo,
        options
      },
      replaceTwinOperationSpec,
      callback) as Promise<Models.ModulesReplaceTwinResponse>;
  }

  /**
   * Updates the tags and desired properties of a module twin. See
   * https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-device-twins for more information.
   * @param id The unique identifier of the device.
   * @param mid The unique identifier of the module.
   * @param deviceTwinInfo The module twin info containing the tags and desired properties to be
   * updated.
   * @param [options] The optional parameters
   * @returns Promise<Models.ModulesUpdateTwinResponse>
   */
  updateTwin(id: string, mid: string, deviceTwinInfo: Models.Twin, options?: Models.ModulesUpdateTwinOptionalParams): Promise<Models.ModulesUpdateTwinResponse>;
  /**
   * @param id The unique identifier of the device.
   * @param mid The unique identifier of the module.
   * @param deviceTwinInfo The module twin info containing the tags and desired properties to be
   * updated.
   * @param callback The callback
   */
  updateTwin(id: string, mid: string, deviceTwinInfo: Models.Twin, callback: msRest.ServiceCallback<Models.Twin>): void;
  /**
   * @param id The unique identifier of the device.
   * @param mid The unique identifier of the module.
   * @param deviceTwinInfo The module twin info containing the tags and desired properties to be
   * updated.
   * @param options The optional parameters
   * @param callback The callback
   */
  updateTwin(id: string, mid: string, deviceTwinInfo: Models.Twin, options: Models.ModulesUpdateTwinOptionalParams, callback: msRest.ServiceCallback<Models.Twin>): void;
  updateTwin(id: string, mid: string, deviceTwinInfo: Models.Twin, options?: Models.ModulesUpdateTwinOptionalParams | msRest.ServiceCallback<Models.Twin>, callback?: msRest.ServiceCallback<Models.Twin>): Promise<Models.ModulesUpdateTwinResponse> {
    return this.client.sendOperationRequest(
      {
        id,
        mid,
        deviceTwinInfo,
        options
      },
      updateTwinOperationSpec,
      callback) as Promise<Models.ModulesUpdateTwinResponse>;
  }

  /**
   * Gets all the module identities on the device.
   * @param id The unique identifier of the device.
   * @param [options] The optional parameters
   * @returns Promise<Models.ModulesGetModulesOnDeviceResponse>
   */
  getModulesOnDevice(id: string, options?: msRest.RequestOptionsBase): Promise<Models.ModulesGetModulesOnDeviceResponse>;
  /**
   * @param id The unique identifier of the device.
   * @param callback The callback
   */
  getModulesOnDevice(id: string, callback: msRest.ServiceCallback<Models.Module[]>): void;
  /**
   * @param id The unique identifier of the device.
   * @param options The optional parameters
   * @param callback The callback
   */
  getModulesOnDevice(id: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Module[]>): void;
  getModulesOnDevice(id: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Module[]>, callback?: msRest.ServiceCallback<Models.Module[]>): Promise<Models.ModulesGetModulesOnDeviceResponse> {
    return this.client.sendOperationRequest(
      {
        id,
        options
      },
      getModulesOnDeviceOperationSpec,
      callback) as Promise<Models.ModulesGetModulesOnDeviceResponse>;
  }

  /**
   * Gets a module identity on the device.
   * @param id The unique identifier of the device.
   * @param mid The unique identifier of the module.
   * @param [options] The optional parameters
   * @returns Promise<Models.ModulesGetIdentityResponse>
   */
  getIdentity(id: string, mid: string, options?: msRest.RequestOptionsBase): Promise<Models.ModulesGetIdentityResponse>;
  /**
   * @param id The unique identifier of the device.
   * @param mid The unique identifier of the module.
   * @param callback The callback
   */
  getIdentity(id: string, mid: string, callback: msRest.ServiceCallback<Models.Module>): void;
  /**
   * @param id The unique identifier of the device.
   * @param mid The unique identifier of the module.
   * @param options The optional parameters
   * @param callback The callback
   */
  getIdentity(id: string, mid: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Module>): void;
  getIdentity(id: string, mid: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Module>, callback?: msRest.ServiceCallback<Models.Module>): Promise<Models.ModulesGetIdentityResponse> {
    return this.client.sendOperationRequest(
      {
        id,
        mid,
        options
      },
      getIdentityOperationSpec,
      callback) as Promise<Models.ModulesGetIdentityResponse>;
  }

  /**
   * Creates or updates the module identity for a device in the IoT Hub. The moduleId and
   * generationId cannot be updated by the user.
   * @param id The unique identifier of the device.
   * @param mid The unique identifier of the module.
   * @param module The module identity.
   * @param [options] The optional parameters
   * @returns Promise<Models.ModulesCreateOrUpdateIdentityResponse>
   */
  createOrUpdateIdentity(id: string, mid: string, module: Models.Module, options?: Models.ModulesCreateOrUpdateIdentityOptionalParams): Promise<Models.ModulesCreateOrUpdateIdentityResponse>;
  /**
   * @param id The unique identifier of the device.
   * @param mid The unique identifier of the module.
   * @param module The module identity.
   * @param callback The callback
   */
  createOrUpdateIdentity(id: string, mid: string, module: Models.Module, callback: msRest.ServiceCallback<Models.Module>): void;
  /**
   * @param id The unique identifier of the device.
   * @param mid The unique identifier of the module.
   * @param module The module identity.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdateIdentity(id: string, mid: string, module: Models.Module, options: Models.ModulesCreateOrUpdateIdentityOptionalParams, callback: msRest.ServiceCallback<Models.Module>): void;
  createOrUpdateIdentity(id: string, mid: string, module: Models.Module, options?: Models.ModulesCreateOrUpdateIdentityOptionalParams | msRest.ServiceCallback<Models.Module>, callback?: msRest.ServiceCallback<Models.Module>): Promise<Models.ModulesCreateOrUpdateIdentityResponse> {
    return this.client.sendOperationRequest(
      {
        id,
        mid,
        module,
        options
      },
      createOrUpdateIdentityOperationSpec,
      callback) as Promise<Models.ModulesCreateOrUpdateIdentityResponse>;
  }

  /**
   * Deletes the module identity for a device in the IoT Hub.
   * @param id The unique identifier of the deivce.
   * @param mid The unique identifier of the module.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteIdentity(id: string, mid: string, options?: Models.ModulesDeleteIdentityOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param id The unique identifier of the deivce.
   * @param mid The unique identifier of the module.
   * @param callback The callback
   */
  deleteIdentity(id: string, mid: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param id The unique identifier of the deivce.
   * @param mid The unique identifier of the module.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteIdentity(id: string, mid: string, options: Models.ModulesDeleteIdentityOptionalParams, callback: msRest.ServiceCallback<void>): void;
  deleteIdentity(id: string, mid: string, options?: Models.ModulesDeleteIdentityOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        id,
        mid,
        options
      },
      deleteIdentityOperationSpec,
      callback);
  }

  /**
   * Invokes a direct method on a module of a device. See
   * https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-direct-methods for more information.
   * @param deviceId The unique identifier of the device.
   * @param moduleId The unique identifier of the module.
   * @param directMethodRequest The parameters to execute a direct method on the module.
   * @param [options] The optional parameters
   * @returns Promise<Models.ModulesInvokeMethodResponse>
   */
  invokeMethod(deviceId: string, moduleId: string, directMethodRequest: Models.CloudToDeviceMethod, options?: msRest.RequestOptionsBase): Promise<Models.ModulesInvokeMethodResponse>;
  /**
   * @param deviceId The unique identifier of the device.
   * @param moduleId The unique identifier of the module.
   * @param directMethodRequest The parameters to execute a direct method on the module.
   * @param callback The callback
   */
  invokeMethod(deviceId: string, moduleId: string, directMethodRequest: Models.CloudToDeviceMethod, callback: msRest.ServiceCallback<Models.CloudToDeviceMethodResult>): void;
  /**
   * @param deviceId The unique identifier of the device.
   * @param moduleId The unique identifier of the module.
   * @param directMethodRequest The parameters to execute a direct method on the module.
   * @param options The optional parameters
   * @param callback The callback
   */
  invokeMethod(deviceId: string, moduleId: string, directMethodRequest: Models.CloudToDeviceMethod, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CloudToDeviceMethodResult>): void;
  invokeMethod(deviceId: string, moduleId: string, directMethodRequest: Models.CloudToDeviceMethod, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CloudToDeviceMethodResult>, callback?: msRest.ServiceCallback<Models.CloudToDeviceMethodResult>): Promise<Models.ModulesInvokeMethodResponse> {
    return this.client.sendOperationRequest(
      {
        deviceId,
        moduleId,
        directMethodRequest,
        options
      },
      invokeMethodOperationSpec,
      callback) as Promise<Models.ModulesInvokeMethodResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getTwinOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "twins/{id}/modules/{mid}",
  urlParameters: [
    Parameters.id,
    Parameters.mid
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Twin
    },
    default: {}
  },
  serializer
};

const replaceTwinOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "twins/{id}/modules/{mid}",
  urlParameters: [
    Parameters.id,
    Parameters.mid
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.ifMatch
  ],
  requestBody: {
    parameterPath: "deviceTwinInfo",
    mapper: {
      ...Mappers.Twin,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Twin
    },
    default: {}
  },
  serializer
};

const updateTwinOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "twins/{id}/modules/{mid}",
  urlParameters: [
    Parameters.id,
    Parameters.mid
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.ifMatch
  ],
  requestBody: {
    parameterPath: "deviceTwinInfo",
    mapper: {
      ...Mappers.Twin,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Twin
    },
    default: {}
  },
  serializer
};

const getModulesOnDeviceOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "devices/{id}/modules",
  urlParameters: [
    Parameters.id
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Module"
            }
          }
        }
      }
    },
    default: {}
  },
  serializer
};

const getIdentityOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "devices/{id}/modules/{mid}",
  urlParameters: [
    Parameters.id,
    Parameters.mid
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Module
    },
    default: {}
  },
  serializer
};

const createOrUpdateIdentityOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "devices/{id}/modules/{mid}",
  urlParameters: [
    Parameters.id,
    Parameters.mid
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.ifMatch
  ],
  requestBody: {
    parameterPath: "module",
    mapper: {
      ...Mappers.Module,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Module
    },
    201: {
      bodyMapper: Mappers.Module
    },
    default: {}
  },
  serializer
};

const deleteIdentityOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "devices/{id}/modules/{mid}",
  urlParameters: [
    Parameters.id,
    Parameters.mid
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.ifMatch
  ],
  responses: {
    204: {},
    default: {}
  },
  serializer
};

const invokeMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "twins/{deviceId}/modules/{moduleId}/methods",
  urlParameters: [
    Parameters.deviceId,
    Parameters.moduleId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  requestBody: {
    parameterPath: "directMethodRequest",
    mapper: {
      ...Mappers.CloudToDeviceMethod,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.CloudToDeviceMethodResult
    },
    default: {}
  },
  serializer
};
