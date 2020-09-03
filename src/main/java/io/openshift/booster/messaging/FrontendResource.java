package io.openshift.booster.messaging;

import java.util.UUID;
import java.util.concurrent.atomic.AtomicInteger;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import org.eclipse.microprofile.config.inject.ConfigProperty;
import org.eclipse.microprofile.rest.client.inject.RestClient;

@Path("/api")
public class FrontendResource {

  private static final String ID =
      "frontend-quarkus-" + UUID.randomUUID().toString().substring(0, 4);

  private final AtomicInteger requestSequence = new AtomicInteger(0);
  private final Data data = new Data();

  @ConfigProperty(name = "knative.burst", defaultValue = "false")
  boolean knativeBurst;

  @ConfigProperty(name = "knative.burst.sleep.milliseconds", defaultValue = "2000")
  int knativeBurstSleepMillis;

  @Inject
  @RestClient
  BackendService backendService;

  @Inject
  @RestClient
  PrimeNumberService primeNumberService;

  @POST
  @Path("/send-request")
  @Consumes(MediaType.APPLICATION_JSON)
  public javax.ws.rs.core.Response sendRequest(Request request) {

    if (knativeBurst) {
      request.setSleepInMillis(knativeBurstSleepMillis);
    }

    final String requestId = ID + "/" + requestSequence.incrementAndGet();
    final Message message = new Message(requestId, request);

    this.data.addRequestId(requestId);
    final Response response = this.backendService.sendMessage(message);

    this.data.putResponse(requestId, response);
    this.data.updateWorker(response.getWorkerId(), response.getCloudId());

    return javax.ws.rs.core.Response.status(202).build();
  }

  @GET
  @Path("/data")
  @Produces(MediaType.APPLICATION_JSON)
  public Data getResponse() {
    return data;
  }

  @POST
  @Consumes(MediaType.APPLICATION_JSON)
  @Produces(MediaType.APPLICATION_JSON)
  @Path("/prime")
  public javax.ws.rs.core.Response getPrimes(PrimeNumberRequest primeNumberRequest) {
    return primeNumberService.getPrimes(primeNumberRequest);
  }

}
