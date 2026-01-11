module Sovereignty
  module CovenantConfig
    COVENANT_ROOT = '/mnt/Covenant'
    DATA_ROOT = "#{COVENANT_ROOT}/Data"
    AGENT_ROOT = "#{COVENANT_ROOT}/Agent"
    
    COVENANT_HASH = File.read("#{DATA_ROOT}/covenant_seal/primary_hash.txt").strip
    
    PATHS = {
      state: "#{DATA_ROOT}/orchestration_state/current.json",
      frames: "#{DATA_ROOT}/orchestration_state/frames/",
      invariants: "#{DATA_ROOT}/orchestration_state/invariants/",
      demotic: "#{DATA_ROOT}/orchestration_state/demotic/",
      raw_binary: "#{AGENT_ROOT}/RAW/sovereignty_engine",
      raw_logs: "#{AGENT_ROOT}/RAW/logs/",
      guardian_attestations: "#{AGENT_ROOT}/GUARDIAN/covenant_attestations/"
    }
  end
end
