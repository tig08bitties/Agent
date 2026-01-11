#!/usr/bin/env ruby
# frozen_string_literal: true

# ΘΕΟΣCRIPT Tokenizer & Parser
# Parses multi-jurisdictional instructions into execution tree

require 'json'

module Theoscript
  # Jurisdictional token types
  module Jurisdiction
    GREEK_MATRIX = :greek_matrix          # Σ, Φ, Α, Λ, Θ, Δ
    SYRIAC_LIFECYCLE = :syriac_lifecycle  # ܐ, ܬ
    ARAMAIC_VIEWPORT = :aramaic_viewport  # 𐡀, ⟐
    DEMOTIC_DRIFT = :demotic_drift        # 𓀀, 𓀀-e, 𓀀-āt
    OPERATOR_POWER = :operator_power      # ⊕, ⊖
    OPERATOR_CALCULUS = :operator_calculus # ∂, ∫
    TAMIL_CASE = :tamil_case              # Case modulation
  end

  # Token definition
  class Token
    attr_reader :type, :jurisdiction, :value, :position

    def initialize(type, jurisdiction, value, position)
      @type = type
      @jurisdiction = jurisdiction
      @value = value
      @position = position
    end

    def to_h
      {
        type: @type,
        jurisdiction: @jurisdiction,
        value: @value,
        position: @position
      }
    end
  end

  # Execution Node (DAG element)
  class ExecutionNode
    attr_accessor :action, :jurisdiction, :timestamp, :dependencies, :completed
    attr_reader :id

    def initialize(id, action, jurisdiction, timestamp, dependencies = [])
      @id = id
      @action = action
      @jurisdiction = jurisdiction
      @timestamp = timestamp
      @dependencies = dependencies
      @completed = false
    end

    def can_execute?(current_t)
      current_t >= @timestamp && @dependencies.all?(&:completed)
    end

    def to_h
      {
        id: @id,
        jurisdiction: @jurisdiction,
        timestamp: @timestamp,
        dependencies: @dependencies.map(&:id),
        completed: @completed
      }
    end
  end

  # Tokenizer
  class Tokenizer
    GREEK_SYMBOLS = %w[Σ Φ Α Λ Θ Δ].freeze
    SYRIAC_SYMBOLS = %w[ܐ ܬ].freeze
    ARAMAIC_SYMBOLS = %w[𐡀 ⟐].freeze
    DEMOTIC_SYMBOLS = %w[𓀀 𓀀-e 𓀀-āt].freeze
    POWER_OPERATORS = %w[⊕ ⊖].freeze
    CALCULUS_OPERATORS = %w[∂ ∫].freeze

    def initialize(input)
      @input = input
      @position = 0
      @tokens = []
    end

    def tokenize
      while @position < @input.length
        char = @input[@position]

        case
        when GREEK_SYMBOLS.include?(char)
          add_token(:matrix_param, Jurisdiction::GREEK_MATRIX, char)
        when SYRIAC_SYMBOLS.include?(char)
          add_token(:lifecycle, Jurisdiction::SYRIAC_LIFECYCLE, char)
        when ARAMAIC_SYMBOLS.include?(char)
          add_token(:viewport, Jurisdiction::ARAMAIC_VIEWPORT, char)
        when char == '𓀀'
          # Check for extended demotic forms
          if @input[@position..@position + 2] == '𓀀-e'
            add_token(:demotic_ergative, Jurisdiction::DEMOTIC_DRIFT, '𓀀-e')
            @position += 2
          elsif @input[@position..@position + 3] == '𓀀-āt'
            add_token(:demotic_ablative, Jurisdiction::DEMOTIC_DRIFT, '𓀀-āt')
            @position += 3
          else
            add_token(:demotic_base, Jurisdiction::DEMOTIC_DRIFT, '𓀀')
          end
        when POWER_OPERATORS.include?(char)
          add_token(:power_op, Jurisdiction::OPERATOR_POWER, char)
        when CALCULUS_OPERATORS.include?(char)
          add_token(:calculus_op, Jurisdiction::OPERATOR_CALCULUS, char)
        when char == 'X'
          # Marker for power-up zones
          add_token(:marker_x, :marker, 'X')
        when char.match?(/[A-Z]/)
          # Uppercase identifier (valid in ΘΕΟΣCRIPT)
          identifier = consume_identifier
          add_token(:identifier, :identifier, identifier)
          next
        when char.match?(/\d/)
          # Numeric value
          number = consume_number
          add_token(:number, :literal, number)
          next
        when char.match?(/\s/)
          # Whitespace (skip)
        else
          # Unknown token (skip or error)
          warn "Warning: Unknown token '#{char}' at position #{@position}"
        end

        @position += 1
      end

      @tokens
    end

    private

    def add_token(type, jurisdiction, value)
      @tokens << Token.new(type, jurisdiction, value, @position)
    end

    def consume_identifier
      start = @position
      @position += 1 while @position < @input.length && @input[@position].match?(/[A-Z0-9_]/)
      @input[start...@position]
    end

    def consume_number
      start = @position
      @position += 1 while @position < @input.length && @input[@position].match?(/[\d.]/)
      @input[start...@position].to_f
    end
  end

  # Parser
  class Parser
    def initialize(tokens)
      @tokens = tokens
      @position = 0
      @execution_tree = []
    end

    def parse
      while @position < @tokens.length
        token = @tokens[@position]

        case token.jurisdiction
        when Jurisdiction::GREEK_MATRIX
          parse_matrix_operation(token)
        when Jurisdiction::SYRIAC_LIFECYCLE
          parse_lifecycle_operation(token)
        when Jurisdiction::ARAMAIC_VIEWPORT
          parse_viewport_operation(token)
        when Jurisdiction::DEMOTIC_DRIFT
          parse_demotic_operation(token)
        when Jurisdiction::OPERATOR_POWER
          parse_power_operation(token)
        when Jurisdiction::OPERATOR_CALCULUS
          parse_calculus_operation(token)
        end

        @position += 1
      end

      @execution_tree
    end

    private

    def parse_matrix_operation(token)
      # Σ, Φ, Α → Matrix parameters for GPU
      @execution_tree << {
        type: :gpu_matrix_update,
        parameter: token.value,
        jurisdiction: token.jurisdiction,
        position: token.position
      }
    end

    def parse_lifecycle_operation(token)
      # ܐ = start, ܬ = terminate
      action = token.value == 'ܐ' ? :spawn : :terminate
      @execution_tree << {
        type: :process_lifecycle,
        action: action,
        jurisdiction: token.jurisdiction,
        position: token.position
      }
    end

    def parse_viewport_operation(token)
      # 𐡀, ⟐ → Viewport anchoring
      @execution_tree << {
        type: :viewport_anchor,
        symbol: token.value,
        jurisdiction: token.jurisdiction,
        position: token.position
      }
    end

    def parse_demotic_operation(token)
      # 𓀀, 𓀀-e, 𓀀-āt → Drift elements
      case_type = if token.value == '𓀀-e'
                    :ergative
                  elsif token.value == '𓀀-āt'
                    :ablative
                  else
                    :base
                  end

      @execution_tree << {
        type: :demotic_drift,
        case: case_type,
        jurisdiction: token.jurisdiction,
        position: token.position
      }
    end

    def parse_power_operation(token)
      # ⊕ = power-up, ⊖ = decay
      action = token.value == '⊕' ? :power_up : :decay
      @execution_tree << {
        type: :power_modulation,
        action: action,
        jurisdiction: token.jurisdiction,
        position: token.position
      }
    end

    def parse_calculus_operation(token)
      # ∂ = differential, ∫ = integral
      action = token.value == '∂' ? :monitor : :accumulate
      @execution_tree << {
        type: :calculus_operation,
        action: action,
        jurisdiction: token.jurisdiction,
        position: token.position
      }
    end
  end

  # Zone Analyzer
  class ZoneAnalyzer
    def self.determine_zones(execution_tree, current_t)
      zones = {
        power_up: [],
        decay: [],
        central: nil,
        drift: []
      }

      x_markers = []
      taw_positions = []

      execution_tree.each do |node|
        case node[:type]
        when :power_modulation
          if node[:action] == :power_up
            x_markers << node[:position]
          elsif node[:action] == :decay
            zones[:decay] << node[:position]
          end
        when :process_lifecycle
          taw_positions << node[:position] if node[:action] == :terminate
        when :viewport_anchor
          zones[:central] = node if node[:symbol] == '⟐'
        when :demotic_drift
          zones[:drift] << node
        end
      end

      # Create power-up zones between X markers
      x_markers.each_slice(2) do |start, finish|
        zones[:power_up] << { start: start, end: finish } if finish
      end

      # Add decay zones beyond ܬ markers
      taw_positions.each do |pos|
        zones[:decay] << { start: pos, end: :infinity }
      end

      zones
    end

    def self.in_zone?(current_t, zones, zone_type)
      return false unless zones[zone_type]

      zones[zone_type].any? do |zone|
        zone.is_a?(Hash) && current_t >= zone[:start] && current_t <= zone[:end]
      end
    end
  end
end

# Example usage
if __FILE__ == $PROGRAM_NAME
  puts "ΘΕΟΣCRIPT Tokenizer & Parser v1.0"
  puts "=" * 50

  # Example ΘΕΟΣCRIPT instruction
  instruction = "ܐ Σ Φ Α ⊕ X 𓀀-e ܬ ⊖ 𓀀-āt ⟐"

  puts "\nInput: #{instruction}"
  puts ""

  # Tokenize
  tokenizer = Theoscript::Tokenizer.new(instruction)
  tokens = tokenizer.tokenize

  puts "Tokens:"
  tokens.each do |token|
    puts "  #{token.type.to_s.ljust(20)} | #{token.jurisdiction.to_s.ljust(25)} | #{token.value}"
  end

  # Parse
  parser = Theoscript::Parser.new(tokens)
  execution_tree = parser.parse

  puts "\nExecution Tree:"
  puts JSON.pretty_generate(execution_tree)

  # Analyze zones
  zones = Theoscript::ZoneAnalyzer.determine_zones(execution_tree, 0.0)

  puts "\nZones:"
  puts JSON.pretty_generate(zones)
end
