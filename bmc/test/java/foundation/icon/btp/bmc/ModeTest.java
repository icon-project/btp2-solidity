package foundation.icon.btp.bmc;

import foundation.icon.btp.lib.BTPAddress;
import foundation.icon.btp.test.EVMIntegrationTest;
import foundation.icon.btp.test.MockBSHIntegrationTest;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.Test;

import java.math.BigInteger;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class ModeTest implements BMCIntegrationTest {
    static BTPAddress link = Faker.btpLink();
    static String svc = MockBSHIntegrationTest.SERVICE;
    static String relay = EVMIntegrationTest.credentials.getAddress();

    static void setMode(BigInteger mode) {
        System.out.printf("ModeTest:setMode _mode:%s\n", mode);
        try {
            bmcManagement.setMode(mode).send();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        assertEquals(mode, getMode());
    }

    static BigInteger getMode() {
        try {
            return bmcManagement.getMode().send();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @AfterAll
    static void afterAll() {
        System.out.println("ModeTest:afterAll start");
        setMode(MODE_NORMAL);
        System.out.println("ModeTest:afterAll end");
    }

    @Test
    void setModeShouldSuccess() {
        setMode(MODE_MAINTENANCE);
        sendMessageShouldRevert();
        handleRelayMessageShouldRevert();
        claimRewardShouldRevert();
    }

    void sendMessageShouldRevert() {
        System.out.println("ModeTest:sendMessageShouldRevert");
        AssertBMCException.assertUnknown(() -> bmcPeriphery.sendMessage(
                link.net(), svc, BigInteger.ZERO, Faker.btpLink().toBytes(),
                BigInteger.ZERO).send());
    }

    void handleRelayMessageShouldRevert() {
        System.out.println("ModeTest:handleRelayMessageShouldRevert");
        AssertBMCException.assertUnknown(() ->
                bmcPeriphery.handleRelayMessage(link.toString(),
                        MessageTest.mockRelayMessage(MessageTest.btpMessageForSuccess(link)).toBytes()).send());
    }
    void claimRewardShouldRevert() {
        System.out.println("ModeTest:claimRewardShouldRevert");
        AssertBMCException.assertUnknown(() ->
                bmcPeriphery.claimReward(link.net(), relay,
                        BigInteger.ZERO).send());
    }
}
