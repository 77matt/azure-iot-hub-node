/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as msRest from "@azure/ms-rest-js";


export const ConfigurationMetrics: msRest.CompositeMapper = {
  serializedName: "ConfigurationMetrics",
  type: {
    name: "Composite",
    className: "ConfigurationMetrics",
    modelProperties: {
      results: {
        serializedName: "results",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "Number"
            }
          }
        }
      },
      queries: {
        serializedName: "queries",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const ConfigurationContent: msRest.CompositeMapper = {
  serializedName: "ConfigurationContent",
  type: {
    name: "Composite",
    className: "ConfigurationContent",
    modelProperties: {
      deviceContent: {
        serializedName: "deviceContent",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "Object"
            }
          }
        }
      },
      modulesContent: {
        serializedName: "modulesContent",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "Dictionary",
              value: {
                type: {
                  name: "Object"
                }
              }
            }
          }
        }
      },
      moduleContent: {
        serializedName: "moduleContent",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "Object"
            }
          }
        }
      }
    }
  }
};

export const Configuration: msRest.CompositeMapper = {
  serializedName: "Configuration",
  type: {
    name: "Composite",
    className: "Configuration",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      schemaVersion: {
        serializedName: "schemaVersion",
        type: {
          name: "String"
        }
      },
      labels: {
        serializedName: "labels",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      },
      content: {
        serializedName: "content",
        type: {
          name: "Composite",
          className: "ConfigurationContent"
        }
      },
      targetCondition: {
        serializedName: "targetCondition",
        type: {
          name: "String"
        }
      },
      createdTimeUtc: {
        serializedName: "createdTimeUtc",
        type: {
          name: "DateTime"
        }
      },
      lastUpdatedTimeUtc: {
        serializedName: "lastUpdatedTimeUtc",
        type: {
          name: "DateTime"
        }
      },
      priority: {
        serializedName: "priority",
        type: {
          name: "Number"
        }
      },
      systemMetrics: {
        serializedName: "systemMetrics",
        type: {
          name: "Composite",
          className: "ConfigurationMetrics"
        }
      },
      metrics: {
        serializedName: "metrics",
        type: {
          name: "Composite",
          className: "ConfigurationMetrics"
        }
      },
      etag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ConfigurationQueriesTestInput: msRest.CompositeMapper = {
  serializedName: "ConfigurationQueriesTestInput",
  type: {
    name: "Composite",
    className: "ConfigurationQueriesTestInput",
    modelProperties: {
      targetCondition: {
        serializedName: "targetCondition",
        type: {
          name: "String"
        }
      },
      customMetricQueries: {
        serializedName: "customMetricQueries",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const ConfigurationQueriesTestResponse: msRest.CompositeMapper = {
  serializedName: "ConfigurationQueriesTestResponse",
  type: {
    name: "Composite",
    className: "ConfigurationQueriesTestResponse",
    modelProperties: {
      targetConditionError: {
        serializedName: "targetConditionError",
        type: {
          name: "String"
        }
      },
      customMetricQueryErrors: {
        serializedName: "customMetricQueryErrors",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const RegistryStatistics: msRest.CompositeMapper = {
  serializedName: "RegistryStatistics",
  type: {
    name: "Composite",
    className: "RegistryStatistics",
    modelProperties: {
      totalDeviceCount: {
        serializedName: "totalDeviceCount",
        type: {
          name: "Number"
        }
      },
      enabledDeviceCount: {
        serializedName: "enabledDeviceCount",
        type: {
          name: "Number"
        }
      },
      disabledDeviceCount: {
        serializedName: "disabledDeviceCount",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ServiceStatistics: msRest.CompositeMapper = {
  serializedName: "ServiceStatistics",
  type: {
    name: "Composite",
    className: "ServiceStatistics",
    modelProperties: {
      connectedDeviceCount: {
        serializedName: "connectedDeviceCount",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const SymmetricKey: msRest.CompositeMapper = {
  serializedName: "SymmetricKey",
  type: {
    name: "Composite",
    className: "SymmetricKey",
    modelProperties: {
      primaryKey: {
        serializedName: "primaryKey",
        type: {
          name: "String"
        }
      },
      secondaryKey: {
        serializedName: "secondaryKey",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const X509Thumbprint: msRest.CompositeMapper = {
  serializedName: "X509Thumbprint",
  type: {
    name: "Composite",
    className: "X509Thumbprint",
    modelProperties: {
      primaryThumbprint: {
        serializedName: "primaryThumbprint",
        type: {
          name: "String"
        }
      },
      secondaryThumbprint: {
        serializedName: "secondaryThumbprint",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AuthenticationMechanism: msRest.CompositeMapper = {
  serializedName: "AuthenticationMechanism",
  type: {
    name: "Composite",
    className: "AuthenticationMechanism",
    modelProperties: {
      symmetricKey: {
        serializedName: "symmetricKey",
        type: {
          name: "Composite",
          className: "SymmetricKey"
        }
      },
      x509Thumbprint: {
        serializedName: "x509Thumbprint",
        type: {
          name: "Composite",
          className: "X509Thumbprint"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DeviceCapabilities: msRest.CompositeMapper = {
  serializedName: "DeviceCapabilities",
  type: {
    name: "Composite",
    className: "DeviceCapabilities",
    modelProperties: {
      iotEdge: {
        serializedName: "iotEdge",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const Device: msRest.CompositeMapper = {
  serializedName: "Device",
  type: {
    name: "Composite",
    className: "Device",
    modelProperties: {
      deviceId: {
        serializedName: "deviceId",
        type: {
          name: "String"
        }
      },
      generationId: {
        serializedName: "generationId",
        type: {
          name: "String"
        }
      },
      etag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      },
      connectionState: {
        serializedName: "connectionState",
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "status",
        type: {
          name: "String"
        }
      },
      statusReason: {
        serializedName: "statusReason",
        type: {
          name: "String"
        }
      },
      connectionStateUpdatedTime: {
        serializedName: "connectionStateUpdatedTime",
        type: {
          name: "DateTime"
        }
      },
      statusUpdatedTime: {
        serializedName: "statusUpdatedTime",
        type: {
          name: "DateTime"
        }
      },
      lastActivityTime: {
        serializedName: "lastActivityTime",
        type: {
          name: "DateTime"
        }
      },
      cloudToDeviceMessageCount: {
        serializedName: "cloudToDeviceMessageCount",
        type: {
          name: "Number"
        }
      },
      authentication: {
        serializedName: "authentication",
        type: {
          name: "Composite",
          className: "AuthenticationMechanism"
        }
      },
      capabilities: {
        serializedName: "capabilities",
        type: {
          name: "Composite",
          className: "DeviceCapabilities"
        }
      },
      deviceScope: {
        serializedName: "deviceScope",
        type: {
          name: "String"
        }
      },
      parentScopes: {
        serializedName: "parentScopes",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const PropertyContainer: msRest.CompositeMapper = {
  serializedName: "PropertyContainer",
  type: {
    name: "Composite",
    className: "PropertyContainer",
    modelProperties: {
      desired: {
        serializedName: "desired",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "Object"
            }
          }
        }
      },
      reported: {
        serializedName: "reported",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "Object"
            }
          }
        }
      }
    }
  }
};

export const ExportImportDevice: msRest.CompositeMapper = {
  serializedName: "ExportImportDevice",
  type: {
    name: "Composite",
    className: "ExportImportDevice",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      moduleId: {
        serializedName: "moduleId",
        type: {
          name: "String"
        }
      },
      eTag: {
        serializedName: "eTag",
        type: {
          name: "String"
        }
      },
      importMode: {
        serializedName: "importMode",
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "status",
        type: {
          name: "String"
        }
      },
      statusReason: {
        serializedName: "statusReason",
        type: {
          name: "String"
        }
      },
      authentication: {
        serializedName: "authentication",
        type: {
          name: "Composite",
          className: "AuthenticationMechanism"
        }
      },
      twinETag: {
        serializedName: "twinETag",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "Object"
            }
          }
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "PropertyContainer"
        }
      },
      capabilities: {
        serializedName: "capabilities",
        type: {
          name: "Composite",
          className: "DeviceCapabilities"
        }
      },
      deviceScope: {
        serializedName: "deviceScope",
        type: {
          name: "String"
        }
      },
      parentScopes: {
        serializedName: "parentScopes",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const DeviceRegistryOperationError: msRest.CompositeMapper = {
  serializedName: "DeviceRegistryOperationError",
  type: {
    name: "Composite",
    className: "DeviceRegistryOperationError",
    modelProperties: {
      deviceId: {
        serializedName: "deviceId",
        type: {
          name: "String"
        }
      },
      errorCode: {
        serializedName: "errorCode",
        type: {
          name: "String"
        }
      },
      errorStatus: {
        serializedName: "errorStatus",
        type: {
          name: "String"
        }
      },
      moduleId: {
        serializedName: "moduleId",
        type: {
          name: "String"
        }
      },
      operation: {
        serializedName: "operation",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DeviceRegistryOperationWarning: msRest.CompositeMapper = {
  serializedName: "DeviceRegistryOperationWarning",
  type: {
    name: "Composite",
    className: "DeviceRegistryOperationWarning",
    modelProperties: {
      deviceId: {
        serializedName: "deviceId",
        type: {
          name: "String"
        }
      },
      warningCode: {
        serializedName: "warningCode",
        type: {
          name: "String"
        }
      },
      warningStatus: {
        serializedName: "warningStatus",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BulkRegistryOperationResult: msRest.CompositeMapper = {
  serializedName: "BulkRegistryOperationResult",
  type: {
    name: "Composite",
    className: "BulkRegistryOperationResult",
    modelProperties: {
      isSuccessful: {
        serializedName: "isSuccessful",
        type: {
          name: "Boolean"
        }
      },
      errors: {
        serializedName: "errors",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DeviceRegistryOperationError"
            }
          }
        }
      },
      warnings: {
        serializedName: "warnings",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DeviceRegistryOperationWarning"
            }
          }
        }
      }
    }
  }
};

export const QuerySpecification: msRest.CompositeMapper = {
  serializedName: "QuerySpecification",
  type: {
    name: "Composite",
    className: "QuerySpecification",
    modelProperties: {
      query: {
        serializedName: "query",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TwinProperties: msRest.CompositeMapper = {
  serializedName: "TwinProperties",
  type: {
    name: "Composite",
    className: "TwinProperties",
    modelProperties: {
      desired: {
        serializedName: "desired",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "Object"
            }
          }
        }
      },
      reported: {
        serializedName: "reported",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "Object"
            }
          }
        }
      }
    }
  }
};

export const Twin: msRest.CompositeMapper = {
  serializedName: "Twin",
  type: {
    name: "Composite",
    className: "Twin",
    modelProperties: {
      deviceId: {
        serializedName: "deviceId",
        type: {
          name: "String"
        }
      },
      moduleId: {
        serializedName: "moduleId",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "Object"
            }
          }
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "TwinProperties"
        }
      },
      etag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "version",
        type: {
          name: "Number"
        }
      },
      deviceEtag: {
        serializedName: "deviceEtag",
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "status",
        type: {
          name: "String"
        }
      },
      statusReason: {
        serializedName: "statusReason",
        type: {
          name: "String"
        }
      },
      statusUpdateTime: {
        serializedName: "statusUpdateTime",
        type: {
          name: "DateTime"
        }
      },
      connectionState: {
        serializedName: "connectionState",
        type: {
          name: "String"
        }
      },
      lastActivityTime: {
        serializedName: "lastActivityTime",
        type: {
          name: "DateTime"
        }
      },
      cloudToDeviceMessageCount: {
        serializedName: "cloudToDeviceMessageCount",
        type: {
          name: "Number"
        }
      },
      authenticationType: {
        serializedName: "authenticationType",
        type: {
          name: "String"
        }
      },
      x509Thumbprint: {
        serializedName: "x509Thumbprint",
        type: {
          name: "Composite",
          className: "X509Thumbprint"
        }
      },
      capabilities: {
        serializedName: "capabilities",
        type: {
          name: "Composite",
          className: "DeviceCapabilities"
        }
      },
      deviceScope: {
        serializedName: "deviceScope",
        type: {
          name: "String"
        }
      },
      parentScopes: {
        serializedName: "parentScopes",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const JobProperties: msRest.CompositeMapper = {
  serializedName: "JobProperties",
  type: {
    name: "Composite",
    className: "JobProperties",
    modelProperties: {
      jobId: {
        serializedName: "jobId",
        type: {
          name: "String"
        }
      },
      startTimeUtc: {
        serializedName: "startTimeUtc",
        type: {
          name: "DateTime"
        }
      },
      endTimeUtc: {
        serializedName: "endTimeUtc",
        type: {
          name: "DateTime"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "status",
        type: {
          name: "String"
        }
      },
      progress: {
        serializedName: "progress",
        type: {
          name: "Number"
        }
      },
      inputBlobContainerUri: {
        serializedName: "inputBlobContainerUri",
        type: {
          name: "String"
        }
      },
      inputBlobName: {
        serializedName: "inputBlobName",
        type: {
          name: "String"
        }
      },
      outputBlobContainerUri: {
        serializedName: "outputBlobContainerUri",
        type: {
          name: "String"
        }
      },
      outputBlobName: {
        serializedName: "outputBlobName",
        type: {
          name: "String"
        }
      },
      excludeKeysInExport: {
        serializedName: "excludeKeysInExport",
        type: {
          name: "Boolean"
        }
      },
      storageAuthenticationType: {
        serializedName: "storageAuthenticationType",
        type: {
          name: "String"
        }
      },
      failureReason: {
        serializedName: "failureReason",
        type: {
          name: "String"
        }
      },
      includeConfigurations: {
        serializedName: "includeConfigurations",
        type: {
          name: "Boolean"
        }
      },
      configurationsBlobName: {
        serializedName: "configurationsBlobName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PurgeMessageQueueResult: msRest.CompositeMapper = {
  serializedName: "PurgeMessageQueueResult",
  type: {
    name: "Composite",
    className: "PurgeMessageQueueResult",
    modelProperties: {
      totalMessagesPurged: {
        serializedName: "totalMessagesPurged",
        type: {
          name: "Number"
        }
      },
      deviceId: {
        serializedName: "deviceId",
        type: {
          name: "String"
        }
      },
      moduleId: {
        serializedName: "moduleId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CloudToDeviceMethod: msRest.CompositeMapper = {
  serializedName: "CloudToDeviceMethod",
  type: {
    name: "Composite",
    className: "CloudToDeviceMethod",
    modelProperties: {
      methodName: {
        serializedName: "methodName",
        type: {
          name: "String"
        }
      },
      payload: {
        serializedName: "payload",
        type: {
          name: "Object"
        }
      },
      responseTimeoutInSeconds: {
        serializedName: "responseTimeoutInSeconds",
        type: {
          name: "Number"
        }
      },
      connectTimeoutInSeconds: {
        serializedName: "connectTimeoutInSeconds",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const JobRequest: msRest.CompositeMapper = {
  serializedName: "JobRequest",
  type: {
    name: "Composite",
    className: "JobRequest",
    modelProperties: {
      jobId: {
        serializedName: "jobId",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      cloudToDeviceMethod: {
        serializedName: "cloudToDeviceMethod",
        type: {
          name: "Composite",
          className: "CloudToDeviceMethod"
        }
      },
      updateTwin: {
        serializedName: "updateTwin",
        type: {
          name: "Composite",
          className: "Twin"
        }
      },
      queryCondition: {
        serializedName: "queryCondition",
        type: {
          name: "String"
        }
      },
      startTime: {
        serializedName: "startTime",
        type: {
          name: "DateTime"
        }
      },
      maxExecutionTimeInSeconds: {
        serializedName: "maxExecutionTimeInSeconds",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const DeviceJobStatistics: msRest.CompositeMapper = {
  serializedName: "DeviceJobStatistics",
  type: {
    name: "Composite",
    className: "DeviceJobStatistics",
    modelProperties: {
      deviceCount: {
        serializedName: "deviceCount",
        type: {
          name: "Number"
        }
      },
      failedCount: {
        serializedName: "failedCount",
        type: {
          name: "Number"
        }
      },
      succeededCount: {
        serializedName: "succeededCount",
        type: {
          name: "Number"
        }
      },
      runningCount: {
        serializedName: "runningCount",
        type: {
          name: "Number"
        }
      },
      pendingCount: {
        serializedName: "pendingCount",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const JobResponse: msRest.CompositeMapper = {
  serializedName: "JobResponse",
  type: {
    name: "Composite",
    className: "JobResponse",
    modelProperties: {
      jobId: {
        serializedName: "jobId",
        type: {
          name: "String"
        }
      },
      queryCondition: {
        serializedName: "queryCondition",
        type: {
          name: "String"
        }
      },
      createdTime: {
        serializedName: "createdTime",
        type: {
          name: "DateTime"
        }
      },
      startTime: {
        serializedName: "startTime",
        type: {
          name: "DateTime"
        }
      },
      endTime: {
        serializedName: "endTime",
        type: {
          name: "DateTime"
        }
      },
      maxExecutionTimeInSeconds: {
        serializedName: "maxExecutionTimeInSeconds",
        type: {
          name: "Number"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      cloudToDeviceMethod: {
        serializedName: "cloudToDeviceMethod",
        type: {
          name: "Composite",
          className: "CloudToDeviceMethod"
        }
      },
      updateTwin: {
        serializedName: "updateTwin",
        type: {
          name: "Composite",
          className: "Twin"
        }
      },
      status: {
        serializedName: "status",
        type: {
          name: "String"
        }
      },
      failureReason: {
        serializedName: "failureReason",
        type: {
          name: "String"
        }
      },
      statusMessage: {
        serializedName: "statusMessage",
        type: {
          name: "String"
        }
      },
      deviceJobStatistics: {
        serializedName: "deviceJobStatistics",
        type: {
          name: "Composite",
          className: "DeviceJobStatistics"
        }
      }
    }
  }
};

export const QueryResult: msRest.CompositeMapper = {
  serializedName: "QueryResult",
  type: {
    name: "Composite",
    className: "QueryResult",
    modelProperties: {
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      items: {
        serializedName: "items",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Object"
            }
          }
        }
      },
      continuationToken: {
        serializedName: "continuationToken",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Module: msRest.CompositeMapper = {
  serializedName: "Module",
  type: {
    name: "Composite",
    className: "Module",
    modelProperties: {
      moduleId: {
        serializedName: "moduleId",
        type: {
          name: "String"
        }
      },
      managedBy: {
        serializedName: "managedBy",
        type: {
          name: "String"
        }
      },
      deviceId: {
        serializedName: "deviceId",
        type: {
          name: "String"
        }
      },
      generationId: {
        serializedName: "generationId",
        type: {
          name: "String"
        }
      },
      etag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      },
      connectionState: {
        serializedName: "connectionState",
        type: {
          name: "String"
        }
      },
      connectionStateUpdatedTime: {
        serializedName: "connectionStateUpdatedTime",
        type: {
          name: "DateTime"
        }
      },
      lastActivityTime: {
        serializedName: "lastActivityTime",
        type: {
          name: "DateTime"
        }
      },
      cloudToDeviceMessageCount: {
        serializedName: "cloudToDeviceMessageCount",
        type: {
          name: "Number"
        }
      },
      authentication: {
        serializedName: "authentication",
        type: {
          name: "Composite",
          className: "AuthenticationMechanism"
        }
      }
    }
  }
};

export const CloudToDeviceMethodResult: msRest.CompositeMapper = {
  serializedName: "CloudToDeviceMethodResult",
  type: {
    name: "Composite",
    className: "CloudToDeviceMethodResult",
    modelProperties: {
      status: {
        serializedName: "status",
        type: {
          name: "Number"
        }
      },
      payload: {
        serializedName: "payload",
        type: {
          name: "Object"
        }
      }
    }
  }
};

export const QueryGetTwinsHeaders: msRest.CompositeMapper = {
  serializedName: "query-gettwins-headers",
  type: {
    name: "Composite",
    className: "QueryGetTwinsHeaders",
    modelProperties: {
      xMsItemType: {
        serializedName: "x-ms-item-type",
        type: {
          name: "String"
        }
      },
      xMsContinuation: {
        serializedName: "x-ms-continuation",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DigitalTwinGetDigitalTwinHeaders: msRest.CompositeMapper = {
  serializedName: "digitaltwin-getdigitaltwin-headers",
  type: {
    name: "Composite",
    className: "DigitalTwinGetDigitalTwinHeaders",
    modelProperties: {
      eTag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DigitalTwinUpdateDigitalTwinHeaders: msRest.CompositeMapper = {
  serializedName: "digitaltwin-updatedigitaltwin-headers",
  type: {
    name: "Composite",
    className: "DigitalTwinUpdateDigitalTwinHeaders",
    modelProperties: {
      eTag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DigitalTwinInvokeRootLevelCommandHeaders: msRest.CompositeMapper = {
  serializedName: "digitaltwin-invokerootlevelcommand-headers",
  type: {
    name: "Composite",
    className: "DigitalTwinInvokeRootLevelCommandHeaders",
    modelProperties: {
      xMsCommandStatuscode: {
        serializedName: "x-ms-command-statuscode",
        type: {
          name: "Number"
        }
      },
      xMsRequestId: {
        serializedName: "x-ms-request-id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DigitalTwinInvokeComponentCommandHeaders: msRest.CompositeMapper = {
  serializedName: "digitaltwin-invokecomponentcommand-headers",
  type: {
    name: "Composite",
    className: "DigitalTwinInvokeComponentCommandHeaders",
    modelProperties: {
      xMsCommandStatuscode: {
        serializedName: "x-ms-command-statuscode",
        type: {
          name: "Number"
        }
      },
      xMsRequestId: {
        serializedName: "x-ms-request-id",
        type: {
          name: "String"
        }
      }
    }
  }
};
